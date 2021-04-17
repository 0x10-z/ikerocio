from django.shortcuts import render
from ikerocio.home.static_texts import data

def index(request):
    return render(request, 'index.html', context=data)