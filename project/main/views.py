
from django.shortcuts import render

def home_view(request, *args, **kwargs):
    context = {}
    return render(request, 'crypto-currency/index.html', context) 

def login_view(request, *args, **kwargs):
    context= {}
    return render(request, 'crypto-currency/login.html', context) 
