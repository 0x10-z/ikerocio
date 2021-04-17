from django.urls import include, path
from ikerocio.home.views import index

app_name = "home"
urlpatterns = [
    path("", index, name="home")
]
