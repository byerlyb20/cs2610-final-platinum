from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse, JsonResponse
from django.db.models import Sum
import json
import os
import math
from django.contrib.auth.decorators import login_required
from .models import GLAccount, AccountAccessRule, GLEntry

# Load manifest when server launches
MANIFEST = {}
if not settings.DEBUG:
    f = open(f"{settings.BASE_DIR}/core/static/manifest.json")
    MANIFEST = json.load(f)

# Create your views here.
@login_required
def index(req):
    context = {
        "asset_url": os.environ.get("ASSET_URL", ""),
        "debug": settings.DEBUG,
        "manifest": MANIFEST,
        "js_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["file"],
        "css_file": "" if settings.DEBUG else MANIFEST["src/main.ts"]["css"][0]
    }
    return render(req, "core/index.html", context)

@login_required
def user(req):
    print(req.user.first_name)
    return JsonResponse({
        "first": req.user.first_name,
        "last": req.user.last_name,
        "email": req.user.email,
        "username": req.user.username
    })

@login_required
def account(req, id=None):
    if req.method == "GET":
        if id == None:
            def serialize(access_rule):
                account = access_rule.account
                balance = account.glentry_set.aggregate(dollar=Sum('dollar_amt', default=0), subdollar=Sum('subdollar_amt', default=0))
                dollar = balance["dollar"] + math.floor(balance["subdollar"] / 100)
                subdollar = balance["subdollar"] % 100
                return {
                    "id": account.id,
                    "name": account.name,
                    "category": account.category,
                    "created_by": {
                        "first": account.created_by.first_name,
                        "last": account.created_by.last_name,
                        "email": account.created_by.email
                    },
                    "balance": [dollar, subdollar],
                    "number": account.number
                }
            accounts = map(serialize, AccountAccessRule.objects.filter(user=req.user))
            return JsonResponse({
                "accounts": list(accounts)
            })
    elif req.method == "POST":
        body = json.loads(req.body)
        if id == None:
            account = GLAccount(
                name = body["name"],
                category = body["category"],
                created_by = req.user,
                number = int(body["number"])
            )
            account.save()
            access_rule = AccountAccessRule(
                account = account,
                user = req.user,
                role = 0
            )
            access_rule.save()
    return JsonResponse({})

@login_required
def transaction(req, accountId, id=None):
    account = GLAccount.objects.get(pk=accountId)
    if req.method == "GET":
        if id == None:
            def serialize(transaction):
                return {
                    "id": transaction.id,
                    "date": transaction.timestamp.strftime("%x"),
                    "short_description": transaction.short_description,
                    "posting_user": {
                        "first": transaction.posting_user.first_name,
                        "last": transaction.posting_user.last_name,
                        "email": transaction.posting_user.email
                    },
                    "amount": [transaction.dollar_amt, transaction.subdollar_amt]
                }
            transactions = map(serialize, GLEntry.objects.filter(account=account))
            return JsonResponse({
                "transactions": list(transactions),
                "accountName": account.name
            })
    elif req.method == "POST":
        body = json.loads(req.body)
        if id == None:
            entry = GLEntry(
                account = account,
                posting_user = req.user,
                short_description = body["short_description"],
                dollar_amt = int(body["amount"][0]),
                subdollar_amt = int(body["amount"][1])
            )
            entry.save()
    return JsonResponse({})