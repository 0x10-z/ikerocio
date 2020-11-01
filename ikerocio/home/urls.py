from django.urls import include, path
from django.views.generic import TemplateView

app_name = "home"
urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html"), name="home")
]
