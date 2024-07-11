import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasVistaComponent } from './components/peliculas-vista/peliculas-vista.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PeliculasVistaComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
