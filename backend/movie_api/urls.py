from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.datosDePeliculas, name='movie-list'),
    path('movies/add', views.add_movie , name='add-movie'),
]