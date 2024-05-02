from django.urls import path
from . import views

urlpatterns = [
    path('', view=views.index, name="index"),
    path('user/', view=views.user),
    path('account/<int:id>/', view=views.account),
    path('account/', view=views.account),
]