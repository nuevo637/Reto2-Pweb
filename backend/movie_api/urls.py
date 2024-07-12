from django.urls import path
from . import views

urlpatterns = [
    path('movies/', views.datosDePeliculas, name='movie-list'),
    path('movies/<int:id>/', views.eliminarPelicula, name='movie-delete'),
    path('movies/add/', views.addMovie , name='add-movie'),
]
