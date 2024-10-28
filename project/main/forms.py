
from django.forms import forms
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import AccountInfo

class RegistrationForm(UserCreationForm):
    AccountName = forms.CharField(max_length=25, required=True, label="Account Name"),
    Country = forms.CharField(max_length=25, required=False, label="Country" )
    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")
class RegisterForm(UserCreationForm):

    AccountName = forms.CharField(max_length=25, required=True, label="Account Name")
    Country = forms.CharField(max_length=25, required=False, label="Country")

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2", "AccountName", "Country"]

    def save(self, commit=True):
        user = super().save(commit=False)
        if commit:
            user.save()
            AccountInfo.objects.create(
                user=user,
                AccountName = self.cleaned_data["AccountName"],
                Country = self.cleaned_data.get("Country", ""),
            )
            return user