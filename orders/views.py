from django.shortcuts import render

import accounts
from accounts.models import *
from .models import Order
# Create your views here.

def ordersList(request):
    orders = Order.objects.all()
    context = {'orders': orders}
    return render(request, 'orders/orders.html', context=context)

