from django.shortcuts import render,redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required
def index(request):
    return render(request,'store/index.html')
def about(request):
    return render(request,'store/about.html')
def mens(request):
    return render(request,'store/mens.html')
def womens(request):
    return render(request,'store/womens.html')
def billing(request):
    return render(request,'store/billing.html')
def contact(request):
    return render(request,'store/contact.html')
def terms(request):
    return render(request,'store/terms.html')
def privacy(request):
    return render(request,'store/privacy.html')
def authview(request):
    if request.method=="POST":
        form=UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("/")
    else:
            form=UserCreationForm()
    return render(request,"registration/signup.html",{"form":form})
    







