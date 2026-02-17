from django.db import models
from django.contrib.auth.hashers import make_password, check_password



# Create your models here.

class User (models.Model):
    username = models.CharField(max_length = 50)
    password = models.CharField(max_length = 24)
    fullname = models.CharField(max_length = 50)
    email = models.EmailField(max_length = 35)
    phone = models.CharField(max_length = 15)
    is_admin = models.BooleanField(default = False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username