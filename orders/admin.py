from django.contrib import admin

# Register your models here.
from .models import Order

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = [
        'id',
        'full_name',
        'product_title',
        'phone_number',
        'created_time',
        'updated_time',

    ]


