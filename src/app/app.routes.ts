import { Routes } from '@angular/router';
import { Tareas } from './components/tareas/tareas';
import { CrearTarea } from './components/crear-tarea/crear-tarea';
import { PaginaError } from './components/pagina-error/pagina-error';
import { EquipoLider } from './components/comunicacion/equipo-lider/equipo-lider';

export const routes: Routes = [
    {path:'', component:Tareas},
    {path:'inicio', component:Tareas},
    {path:'tareas', component:Tareas},
    {path:'crear-tarea', component:CrearTarea},
    {path:'comunicacion', component:EquipoLider},
    {path: '**', component:PaginaError},
];
