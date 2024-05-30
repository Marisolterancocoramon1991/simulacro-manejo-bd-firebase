import { Component, OnInit } from '@angular/core';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { Pelicula } from '../../clases/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
@Component({
  selector: 'app-pelicula-listado',
  standalone: true,
  imports: [TablaPeliculasComponent,

  ],
  templateUrl: './pelicula-listado.component.html',
  styleUrl: './pelicula-listado.component.css'
})
export class PeliculaListadoComponent implements OnInit{
  peliculas: Pelicula[] = [];
  constructor(private PeliculaService: PeliculaService){}

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  async obtenerPeliculas(): Promise<void> {
    try {
      this.peliculas = await this.PeliculaService.listarPeliculas();
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  }
}
