import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-peliculas-vista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas-vista.component.html',
  styleUrl: './peliculas-vista.component.css'
})
export class PeliculasVistaComponent implements OnInit {

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

}