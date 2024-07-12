import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { RouterModule, Router } from '@angular/router'; // Ajuste de importación
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css'] // Corregir el nombre a styleUrls
})
export class CrearComponent {
  movieForm!: FormGroup;

  constructor(private movieService: MovieService, private router: Router) { // Ajuste del constructor
    this.movieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      image: new FormControl(''),
      genres: new FormControl([], Validators.required), // Agregar Validators.required
      rating: new FormControl('', Validators.required), // Agregar Validators.required
      inTeathers: new FormControl(false)
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movieData: Movie = this.movieForm.value; // Tipado usando la interfaz Movie
      this.movieService.addMovie(movieData).subscribe(
        (response) => {
          console.log('Película agregada correctamente:', response);
          this.movieForm.reset();
          this.router.navigate(['./eliminar-listar']); 
        },
        (error) => {
          console.error('Error al agregar la película:', error);
          // Manejo de errores
        }
      );
    } else {
      console.error('Formulario inválido. Verifica los datos.');
    }
  }
}