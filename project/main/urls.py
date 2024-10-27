from django.urls import path
from .views import *

urlpatterns = [
    path('dashboard/', home_view, name='home'),
    path('', login_view, name='login')
]
