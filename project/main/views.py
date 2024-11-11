
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required 
from .forms import *
from django.db.models import Sum
from .models import UserBalance, AssetType
from decimal import Decimal


@login_required
def home_view(request, *args, **kwargs):
    try:
        account_info = AccountInfo.objects.get(user=request.user)
    except AccountInfo.DoesNotExist:
        account_info = None
    
    user = request.user
    bitcoin_asset_type = AssetType.objects.get(code='BTC')

    bitcoin_balance = UserBalance.objects.filter(user=user, asset_type=bitcoin_asset_type).first()
    bitcoin_balance_amount = bitcoin_balance.balance if bitcoin_balance else Decimal('0.00')

    bitcoin_to_ugx_exchange_rate = Decimal('12300000.00')
    bitcoin_balance_in_ugx = bitcoin_balance_amount * bitcoin_to_ugx_exchange_rate

    context = {
        'account_info': account_info,
        'bitcoin_balance': bitcoin_balance_amount,
        'bitcoin_balance_in_ugx': bitcoin_balance_in_ugx,
        }
    return render(request, 'crypto-currency/index.html', context) 

def login_view(request, *args, **kwargs):
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]

        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request,"Invalid User! Login failed")

    context= {}
    return render(request, 'crypto-currency/login.html', context) 



def register_view(request, *args, **kwargs):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            form.save()
            messages.success(request, f"User {username} has been successfully created. Please login")
            return redirect("login")
    else:
        form = RegisterForm()

    context = {
        "register_form":form,
    }
    return render(request, 'crypto-currency/register.html', context)


from django.http import JsonResponse
import json

@login_required
def send_transaction(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        
        # Extract and validate data from JSON
        asset_type = data.get('asset_type')
        account_number = data.get('account_number')
        account_name = data.get('account_name')
        amount_usd = data.get('amount_usd')
        amount_ugx = data.get('amount_ugx')

        try:
            # Create Transaction object
            transaction = Transaction(
                user=request.user,
                asset_type=AssetType.objects.get(name=asset_type),  # Assumes asset types are identified by name
                transaction_type='TRANSFER',
                amount=amount_usd,
                recipient_account_number=account_number
            )
            transaction.save()
            return JsonResponse({'success': True})
        
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})

    return JsonResponse({'success': False, 'error': 'Invalid request method'})
