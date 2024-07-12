import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl); // Devuelve un Observable del tipo Movie[]
  }

  deleteMovie(name: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${name}/`); // Ajusta la URL según tu API
  }
}