import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-eliminar-listar',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterOutlet],
  templateUrl: './eliminar-listar.component.html',
  styleUrls: ['./eliminar-listar.component.css'],
})
export class EliminarListarComponent {
  peliculas: any[] = []; 

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
      (data: any) => {
        if (Array.isArray(data.items)) {
          this.peliculas = data.items; // Assuming 'items' contains the array of movies
        } else {
          console.error('Invalid data format:', data);
        }
      },
      error => {
        console.error('Error fetching movies:', error);
      }
    );
  }
  
  eliminarPelicula(movieId: number) {
    this.movieService.deleteMovie(movieId).subscribe(
      () => {
        this.peliculas = this.peliculas.filter(p => p.id !== movieId);
      },
      error => {
        console.error('Error deleting movie', error);
      }
    );
  }
}
