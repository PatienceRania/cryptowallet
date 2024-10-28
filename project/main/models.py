from django.db import models
import string
import random
from django.contrib.auth.models import User
from django.utils import timezone
from decimal import Decimal
from django.db import transaction
# Create your models here.


class AccountInfo(models.Model):
    user = models.OneToOneField(to=User, on_delete=models.CASCADE)
    AccountName = models.CharField(max_length=25)
    Country = models.CharField(max_length=25)
    AccountNumber = models.CharField(max_length=15, unique=True, editable=False)

    def save(self, *args, **kwargs):
        if not self.AccountNumber:
            self.AccountNumber = self.generate_account_number()
        super().save(*args, **kwargs)

    @staticmethod
    def generate_account_number():
        return ''.join(random.choices(string.digits + string.ascii_uppercase, k=15))

    def __str__(self):
        return f"{self.AccountName} | {self.AccountNumber}"
    

class AssetType(models.Model):
    ASSET_CHOICES = [
        ('BTC', 'Bitcoin'),
        ('ETH', 'Ethereum'),
        ('TRX', 'Tron'),
        ('USDT', 'USDT'),
    ]
    code = models.CharField(max_length=10, choices=ASSET_CHOICES, unique=True)
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    

class UserBalance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="balances")
    asset_type = models.ForeignKey(AssetType, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=20, decimal_places=2, default=Decimal('0.00'))

    class Meta:
        unique_together = ('user', 'asset_type')

    def __str__(self):
        return f"{self.user.username} - {self.asset_type.name} Balance: {self.balance}"
    
    def deposit(self, amount):
        if isinstance(amount, float):
            amount = Decimal(str(amount))

        self.balance += amount
        self.save()

    def withdraw(self, amount):
        if isinstance(amount, float):
            amount = Decimal(str(amount))
            
        if self.balance >= amount:
            self.balance -= amount
            self.save()
        else:
            raise ValueError("Insufficient funds")
        

class Transaction(models.Model):
    TRANSACTION_TYPES = [
        ('DEPOSIT', 'Deposit'),
        ('WITHDRAWAL', 'Withdrawal'),
        ('TRANSFER', 'Transfer'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="transactions")
    asset_type = models.ForeignKey(AssetType, on_delete=models.CASCADE)
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPES)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    date = models.DateTimeField(default=timezone.now)
    recipient_account_number = models.CharField(max_length=20, null=True, blank=True) 

    def __str__(self):
        return f"{self.transaction_type} of {self.amount} {self.asset_type.name} by {self.user.username}"

    def save(self, *args, **kwargs):
        if not isinstance(self.amount, Decimal):
            self.amount = Decimal(self.amount)

        with transaction.atomic():
            if self.transaction_type == 'DEPOSIT':
                user_balance, _ = UserBalance.objects.get_or_create(user=self.user, asset_type=self.asset_type)
                user_balance.deposit(self.amount)

            elif self.transaction_type == 'WITHDRAWAL':
                user_balance, _ = UserBalance.objects.get_or_create(user=self.user, asset_type=self.asset_type)
                user_balance.withdraw(self.amount)

            elif self.transaction_type == 'TRANSFER':
                if not self.recipient_account_number:
                    raise ValueError("Recipient account number is required for transfers")
                
                try:
                    recipient_profile = AccountInfo.objects.get(AccountNumber=self.recipient_account_number)
                    recipient = recipient_profile.user
                except AccountInfo.DoesNotExist:
                    raise ValueError("Invalid recipient account Information")

                sender_balance, _ = UserBalance.objects.get_or_create(user=self.user, asset_type=self.asset_type)
                recipient_balance, _ = UserBalance.objects.get_or_create(user=recipient, asset_type=self.asset_type)

                sender_balance.withdraw(self.amount)
                recipient_balance.deposit(self.amount)

        super().save(*args, **kwargs)