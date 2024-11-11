
from django.forms import forms
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from .models import AccountInfo
class RegisterForm(UserCreationForm):

    AccountName = forms.CharField(max_length=25, required=True, label="Account Name")
    Country = forms.CharField(max_length=25, required=False, label="Country")

    class Meta:
        model = User
        fields = ["username", "email", "password1", "password2", "AccountName", "Country"]
    widgets = {
        "username": forms.TextInput(attrs={"placeholder": "Username", "required": "required"}),
        "email": forms.EmailInput(attrs={"placeholder": "Email", "required": "required"}),
        "password1": forms.PasswordInput(attrs={"placeholder": "Password", "required": "required"}),
        "password2": forms.PasswordInput(attrs={"placeholder": "Confirm Password", "required": "required"}),
        "AccountName": forms.TextInput(attrs={"placeholder": "Account Name", "required": "required"}),
        "Country":  forms.TextInput(attrs={"placeholder": "optional"})
    }

    def __init__(self, *args, **kwargs):
        super(RegisterForm, self).__init__(*args, **kwargs)
        for field in self.fields.values():
            field.required = True

        
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
        
