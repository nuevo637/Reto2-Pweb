import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8000/api/movies/';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseUrl); // Devuelve un Observable del tipo Movie[]
  }

  addMovies(movie: Movie): Observable<Movie>{
    const url = `${this.baseUrl}add`;
    const headers = new HttpHeaders({'Content-type' : 'application/json'});
    return this.http.post<Movie>(url, movie, {headers})
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any){
    console.error('Error de solicitud', error)
    return throwError('Hubo problema en la solicitud');
  }
}