from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register([
    AccountInfo,
    Transaction,
    UserBalance,
    AssetType,
])