import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('assets/movies.json').subscribe(data => {
      this.peliculas = data.items; 
    });
  }
}