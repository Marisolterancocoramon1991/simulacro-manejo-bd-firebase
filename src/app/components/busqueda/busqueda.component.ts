import { Component, Input} from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { TablaPeliculasComponent } from '../tabla-peliculas/tabla-peliculas.component';
import { PeliculaService } from '../../services/pelicula.service';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [TablaPeliculasComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {
  peliculas: Pelicula[] = [];
  @Input() peliculaSeleccionada: Pelicula | null = null;
  formularioPelicula: FormGroup;
 
  constructor(private PeliculaService: PeliculaService, private fb: FormBuilder)
  {
    this.formularioPelicula = this.fb.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fechaEstreno: ['', Validators.required],
      cantidadPublico: ['', Validators.required]
    });

  }

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
  seleccionarPelicula(pelicula: Pelicula): void {
    console.log("entro seleccion de pelicula");
    this.peliculaSeleccionada = pelicula;
  }

  modificarPelicula(): void {
    if (this.peliculaSeleccionada) {
      // Clonar la película seleccionada para evitar modificarla directamente
      const peliculaModificada = { ...this.peliculaSeleccionada };
      // Modificar los atributos de la película
      // Por ejemplo, cambiar el nombre y el tipo de la película
      peliculaModificada.nombre = 'Nuevo nombre';
      peliculaModificada.tipo = 'terror';
      // Llamar a la función modificarPelicula del servicio PeliculaService
      this.PeliculaService.modificarPelicula(peliculaModificada)
        .then(() => {
          console.log('Pelicula modificada con éxito');
        })
        .catch(error => {
          console.error('Error al modificar la película:', error);
        });
    }
  }
}
