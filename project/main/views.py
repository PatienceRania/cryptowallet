
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth.decorators import login_required 

@login_required
def home_view(request, *args, **kwargs):
    context = {}
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
