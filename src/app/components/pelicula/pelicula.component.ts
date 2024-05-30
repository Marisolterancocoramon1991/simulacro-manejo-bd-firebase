import { Component } from '@angular/core';
import { PeliculaService,  } from '../../services/pelicula.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent {
  imagenSeleccionada: File | null = null;
  formularioPelicula: FormGroup;

  constructor(private peliculaService: PeliculaService, private formBuilder: FormBuilder) {
    this.formularioPelicula = this.formBuilder.group({
      id: ['', ],
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      fechaEstreno: ['', Validators.required],
      cantidadPublico: ['', Validators.required],
      foto: ['',]
    });
  }

  seleccionarImagen(event: any) {
    this.imagenSeleccionada = event.target.files[0];
  }

  agregarPelicula() {
    if (this.formularioPelicula.valid && this.imagenSeleccionada !== null) {
      const nuevaPelicula = new Pelicula( 
        '',
        this.formularioPelicula.value.nombre,
        this.formularioPelicula.value.tipo,
        this.formularioPelicula.value.fechaEstreno,
        this.formularioPelicula.value.cantidadPublico,
        '' // Inicialmente vacío hasta que se cargue la imagen
      );

      this.peliculaService.guardarPelicula(nuevaPelicula, this.imagenSeleccionada);
    } else {
      console.error('El formulario no es válido o no se ha seleccionado ninguna imagen.');
    }
  }
  

}
 

   

