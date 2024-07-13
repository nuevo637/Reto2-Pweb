import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})

export class ModificarComponent implements OnInit{
  pelicula: any = {};
  peliculaID!: number;

  constructor(private movieService: MovieService, private route: ActivatedRoute){
    this.peliculaID = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.movieService.getMovieById(this.peliculaID).subscribe(data => {
      this.pelicula = data;
    });
  }

  guardar(): void {
    this.movieService.updateMovie(this.peliculaID, this.pelicula).subscribe(() => {
    });
  }
}
