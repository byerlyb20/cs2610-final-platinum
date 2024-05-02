from django.db import models
from django.contrib.auth.models import User

ACCESS_ROLES = {
    0: "Admin",
    1: "Contributor",
    2: "Restricted Contributor",
    3: "Auditor"
}

class GLAccount(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=15)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    number = models.PositiveSmallIntegerField()

class AccountAccessRule(models.Model):
    account = models.ForeignKey(GLAccount, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=1, choices=ACCESS_ROLES)

class GLEntry(models.Model):
    account = models.ForeignKey(GLAccount, on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    posting_user = models.ForeignKey(User, on_delete=models.CASCADE)
    short_description = models.CharField(max_length=30)
    dollar_amt = models.BigIntegerField()
    subdollar_amt = models.SmallIntegerField()

class GLEntryAttachment(models.Model):
    entry = models.ForeignKey(GLEntry, on_delete=models.CASCADE)
    last_updated = models.DateTimeField(auto_now=True)
    posting_user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        abstract = True

class GLEntryTextAttachment(GLEntryAttachment):
    description = models.TextField()

def file_attachment_path(instance, filename):
    return f"{instance.entry.account.name}/{instance.entry.id}-{instance.id}_{filename}"

class GLEntryFileAttachment(GLEntryAttachment):
    description = models.TextField()
    file = models.FileField(upload_to=file_attachment_path)

class Budget(models.Model):
    start_date = models.DateField()
    end_date = models.DateField()
    timestamp = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=30)

class BudgetAccessRule(models.Model):
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    role = models.CharField(max_length=1, choices=ACCESS_ROLES)

class BudgetCategory(models.Model):
    name = models.CharField(max_length=30)
    budget = models.ForeignKey(Budget, on_delete=models.CASCADE)
    accounts = models.ForeignKey(GLAccount, on_delete=models.CASCADE)
    dollar_amt = models.BigIntegerField()
    subdollar_amt = models.SmallIntegerField()