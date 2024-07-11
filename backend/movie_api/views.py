from django.http import JsonResponse
import os
import json

def datosDePeliculas(request):
    # Ruta al archivo JSON de películas (a nivel de proyecto static)
    json_file_path = os.path.join(os.path.dirname(__file__), '../static/movies.json')

    # Cargar datos desde el archivo JSON
    with open(json_file_path) as f:
        data = json.load(f)

    return JsonResponse(data)