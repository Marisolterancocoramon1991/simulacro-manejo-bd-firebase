import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-peliculas',
  standalone: true,
  imports: [CommonModule,
    
  ],
  templateUrl: './tabla-peliculas.component.html',
  styleUrl: './tabla-peliculas.component.css'
})
export class TablaPeliculasComponent {
  @Input() peliculas: Pelicula[] = [];
  @Output() clickPelicula: EventEmitter<Pelicula> = new EventEmitter<Pelicula>();

  onPeliculaClicked(pelicula: Pelicula): void {
    console.log("entro");
    this.clickPelicula.emit(pelicula);
  }

}
