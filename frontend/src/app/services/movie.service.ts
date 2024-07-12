import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addMovie(movie: Movie): Observable<any>{
    const url = `${this.baseUrl}add/`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }); 
    return this.http.post<any>(url, movie, {headers});
  }
}