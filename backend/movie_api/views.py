from django.http import JsonResponse, HttpResponseNotFound, HttpResponse
import os
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_GET

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
            # Cargar los datos de la nueva película desde la solicitud
            nueva_pelicula = json.loads(request.body.decode('utf-8'))
            
            # Ruta al archivo JSON
            ruta_archivo = os.path.join(os.path.dirname(__file__), '..', 'static', 'movies.json')
            
            # Leer el archivo JSON
            with open(ruta_archivo, 'r+') as archivo:
                peliculas = json.load(archivo)
                
                # Generar el próximo ID disponible
                if peliculas['items']:
                    max_id = max(pelicula['id'] for pelicula in peliculas['items'])
                else:
                    max_id = 0
                
                nueva_pelicula['id'] = max_id + 1  # Asignar el nuevo ID
                
                # Agregar la nueva película al JSON
                peliculas['items'].append(nueva_pelicula)
                
                # Escribir los cambios en el archivo JSON
                archivo.seek(0)
                json.dump(peliculas, archivo, indent=4)
                archivo.truncate()
            
            return JsonResponse({'mensaje': 'Película agregada correctamente', 'id': nueva_pelicula['id']})
        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Error al decodificar JSON'}, status=400)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Método no permitido'}, status=405)
    

@csrf_exempt
def eliminarPelicula(request, id):
    if request.method == 'DELETE':
        json_file_path = os.path.join(os.path.dirname(__file__), '../static/movies.json')
        with open(json_file_path) as f:
            data = json.load(f)

        pelicula = next((item for item in data['items'] if item['id'] == id), None)
        if pelicula:
            data['items'].remove(pelicula)
            with open(json_file_path, 'w') as f:
                json.dump(data, f)
            return JsonResponse({'status': 'success'})
        else:
            return HttpResponseNotFound({'status': 'not found'})
    else:
        return JsonResponse({'status': 'method not allowed'}, status=405)