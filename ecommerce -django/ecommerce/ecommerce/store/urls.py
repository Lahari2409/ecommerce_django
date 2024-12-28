
# urls.py
from django.urls import path,include
from . import views

urlpatterns=[
    path('',views.index,name='indexpage'),
    path('signup/',views.authview,name='authview'),
    path('about/',views.about,name='about'),
    path('mens/',views.mens,name='mens'),
    path('womens/',views.womens,name='womens'),
    path('billing/',views.billing,name='billing'),
    path('contact/',views.contact,name='contact'),
    path('privacy/',views.privacy,name='privacy'),
    path('terms/',views.terms,name='terms'),
    path("accounts/",include("django.contrib.auth.urls")),
    
]