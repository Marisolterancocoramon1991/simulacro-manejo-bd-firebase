import { Routes } from '@angular/router';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { PeliculaListadoComponent } from './components/pelicula-listado/pelicula-listado.component';
import { ActorAltaComponent } from './components/actor-alta/actor-alta.component';
import { ActorlistadoComponent } from './components/actorlistado/actorlistado.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

export const routes: Routes = [
    {
        path: 'pelicula/alta',
        component: PeliculaComponent,
    },
    {
        path: 'pelicula/listado',
        component: PeliculaListadoComponent,
    },
    {
        path: 'actor/alta',
        component: ActorAltaComponent,
    },
    {
        path: 'actor/listado',
        component: ActorlistadoComponent,
    },
    {
        path: 'bienvenido',
        component: BienvenidaComponent,
    },
    {
        path: 'busqueda',
        component: BusquedaComponent,
    },
    
];
