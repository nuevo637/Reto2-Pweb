from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import os
import json

def datosDePeliculas(request):
    # Ruta al archivo JSON de películas (a nivel de proyecto static)
    json_file_path = os.path.join(os.path.dirname(__file__), '../static/movies.json')

    # Cargar datos desde el archivo JSON
    with open(json_file_path) as f:
        data = json.load(f)

    return JsonResponse(data)

@csrf_exempt
def addMovie(request):
    if request.method == 'POST':
        try:
            nueva_pelicula = json.loads(request.body.decode('utf-8'))
            # Procesar y actualizar el archivo JSON estático
            with open('../static/nuevo.json', 'r+') as archivo:
                peliculas = json.load(archivo)
                peliculas.append(nueva_pelicula)
                archivo.seek(0)
                json.dump(peliculas, archivo, indent=4)           
            return JsonResponse({'mensaje': 'Película agregada correctamente'})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Error al decodificar JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)