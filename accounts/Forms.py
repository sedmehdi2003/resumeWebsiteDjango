from django import forms

class LoginForm(forms.Form):
    username= forms.CharField(max_length = 24, required = True)
    password = forms.CharField(max_length=128, widget = forms.PasswordInput(), required = True)

class PhoneNumberLoginForm(forms.Form):
    phone = forms.CharField(min_length=9, max_length = 11, required = True)
    country_code = forms.ChoiceField(required = True)


class RegisterForm(forms.Form):
    email = forms.EmailField(required = True)
    password = forms.CharField(widget = forms.PasswordInput(), required = True)
    username = forms.CharField(required = True)
    first_name = forms.CharField(required = True)
    last_name = forms.CharField(required = True)
    phone = forms.CharField(min_length=9, max_length=11, required = True)
    country_code = forms.ChoiceField(required = True)

