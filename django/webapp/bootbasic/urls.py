from django.conf.urls import url
from bootbasic import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
]