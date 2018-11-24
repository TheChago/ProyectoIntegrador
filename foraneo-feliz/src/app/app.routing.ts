import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './components/info/info.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { DepartamentComponent } from './components/departament/departament.component';
import { ForumComponent } from './components/forum/forum.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes = [
	{path: '', component: InfoComponent},
	{path: 'informacion', component: InfoComponent},
	{path: 'para-comer', component: RestaurantComponent},
	{path: 'departamentos', component: DepartamentComponent},
	{path: 'agregar-dep', component: ForumComponent},
	{path: 'departament/:id', component: DetailComponent},
	{path: 'editar-departamento/:id', component: EditComponent},
	{path: '**', component: ErrorComponent}
]

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);