from django.db import models

# Create your models here.

class Order(models.Model):
    full_name = models.CharField(max_length=30)
    email = models.EmailField()
    phone_number = models.CharField(max_length=16)
    product_title = models.CharField(max_length=30)
    product_description = models.TextField()
    product_file = models.FileField(upload_to='products/%Y/%m/%d', null=True, blank=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return format(self.product_title)