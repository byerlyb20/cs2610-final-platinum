from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('user/', view=views.user),
    path('accounts/<int:id>/', view=views.account),
    path('accounts/', view=views.account),
]