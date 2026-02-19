from django.shortcuts import render
from .models import User
from django.views import generic
from .Forms import RegisterForm
from django.http import HttpResponseRedirect





# Create your views here.

class AdminPanel(generic.ListView):
    queryset = User.objects.all()
    context_object_name = 'user_list'
    template_name = 'accounts/adminPanel.html'

def registerUser(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            User.objects.create(**form.cleaned_data)
            return HttpResponseRedirect('/home/')
    else:
        form = RegisterForm()
        return render(request, 'accounts/userPanel.html', {'form': form})


