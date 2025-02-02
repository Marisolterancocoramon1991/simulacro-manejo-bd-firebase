export class Pelicula {
    id: string;
    nombre: string;
    tipo: 'terror' | 'comedia' | 'amor' | 'otros';
    fechaEstreno: Date;
    cantidadPublico: number;
    foto: any;
  
    constructor(
      id: string,
      nombre: string,
      tipo: 'terror' | 'comedia' | 'amor' | 'otros',
      fechaEstreno: Date,
      cantidadPublico: number,
      foto: any
    ) {
      this.id = id;
      this.nombre = nombre;
      this.tipo = tipo;
      this.fechaEstreno = fechaEstreno;
      this.cantidadPublico = cantidadPublico;
      this.foto = foto;
    }
  }
  