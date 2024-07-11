import { Routes } from '@angular/router';
import { PeliculasVistaComponent } from './components/peliculas-vista/peliculas-vista.component';
import { EliminarListarComponent } from './components/eliminar-listar/eliminar-listar.component';
import { CrearComponent } from './components/crear/crear.component';
import { ModificarComponent } from './components/modificar/modificar.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: PeliculasVistaComponent},
    {path: 'eliminarListar', component: EliminarListarComponent},
    {path: 'crear', component: CrearComponent},
    {path: 'modificar', component: ModificarComponent},
];