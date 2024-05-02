from django.contrib import admin
from .models import GLAccount, AccountAccessRule

# Register your models here.
admin.site.register(GLAccount)
admin.site.register(AccountAccessRule)