from django.shortcuts import render
from django.conf import settings
from django.http import HttpResponse, JsonResponse
import json
import os
from django.contrib.auth.decorators import login_required

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
def account(req, accountId=None):
    if req.method == "GET":
        print("Handling get with %s", accountId)
    elif req.method == "POST":
        print("Handling post with %s", accountId)
    return HttpResponse("Hello")