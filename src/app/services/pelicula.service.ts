import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, doc, setDoc, getDoc, getDocs } from '@angular/fire/firestore'; // Corrección: Añadir importación de getDocs
import { Storage, ref, uploadBytes, getDownloadURL, } from '@angular/fire/storage';
import { Pelicula } from '../clases/pelicula';


@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  constructor(private firestore: Firestore, private storage: Storage) { }

  guardarPelicula(pelicula: Pelicula, file: File): Promise<void> {
    // Crear una referencia al documento
    const docRef = doc(collection(this.firestore, 'peliculas'));
    const docId = docRef.id; // Obtener el ID del documento generado

    // Asignar el ID al objeto película
    pelicula.id = docId;

    // Crear referencia al almacenamiento
    const storageRef = ref(this.storage, `imagen/${pelicula.nombre}/${pelicula.id}`);

    return uploadBytes(storageRef, file)
      .then(() => getDownloadURL(storageRef))
      .then(url => {
        pelicula.foto = url; 

        return setDoc(docRef, { ...pelicula }); // Guardar la película con el ID en Firestore
      })
      .then(() => {
        console.log('Película guardada con éxito con ID: ', docId);
      })
      .catch(error => {
        console.error('Error al guardar la película: ', error);
        throw error;
      });
  }

  async listarPeliculas(): Promise<Pelicula[]> {
    const peliculas: Pelicula[] = [];
    const peliculasCollection = collection(this.firestore, 'peliculas');
    const peliculasSnapshot = await getDocs(peliculasCollection);
  
    for (const doc of peliculasSnapshot.docs) {
      const pelicula = doc.data() as Pelicula;
      const storageRef = ref(this.storage, `imagen/${pelicula.nombre}/${pelicula.id}`);

      if (pelicula.foto) {
      try {

        const fotoUrl = await getDownloadURL(storageRef); // Obtiene la URL de descarga directamente desde la referencia
        pelicula.foto = fotoUrl;
        peliculas.push(pelicula);
      } catch (error) {
        console.error('Error al obtener la URL de descarga:', error);
      }
    }
  } 
    return peliculas;
  }
  
  async modificarPelicula(pelicula: Pelicula): Promise<void> {
    try {
      // Obtener la referencia al documento de la película en Firestore
      const docRef = doc(collection(this.firestore, 'peliculas'), pelicula.id);
  
      // Eliminar las propiedades foto e id del objeto película
      const { foto, id, ...peliculaSinFotoId } = pelicula;
  
      // Actualizar el documento en Firestore con las propiedades restantes de la película
      await setDoc(docRef, { ...peliculaSinFotoId });
  
      console.log('Película modificada con éxito');
    } catch (error) {
      console.error('Error al modificar la película:', error);
      throw error;
    }
  }
  
}
