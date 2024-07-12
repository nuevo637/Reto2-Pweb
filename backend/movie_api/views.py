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

def add_movie(request):
    if request.method == 'POST':
        try:
            
            json_file_path = os.path.join(os.path.dirname(__file__), '../static/movies.json')

            with open(json_file_path, 'r') as f:
                movies = json.load(f)

            new_movie = json.loads(request.body)
            movies.append(new_movie)

            with open(json_file_path, 'w') as f:
                json.dump(movies, f, indent=4)

            return JsonResponse(new_movie, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=400)