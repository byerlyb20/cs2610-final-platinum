from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('user/', view=views.user),
    path('accounts/<int:id>/', view=views.account),
    path('accounts/', view=views.account),
    path('accounts/<int:accountId>/transactions/<int:id>/', view=views.transaction),
    path('accounts/<int:accountId>/transactions/', view=views.transaction),
]