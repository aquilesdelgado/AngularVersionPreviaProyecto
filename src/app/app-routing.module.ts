import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Top20PeliculasComponent} from './top20-peliculas/top20-peliculas.component';
import {CommonModule} from '@angular/common';
import { DetallesComponent} from './detalles/detalles.component';
import { TituloComponent} from './titulo/titulo.component';
import { FormularioComponent } from './titulo/formulario/formulario.component';
import { ResultPelisComponent } from './top20-peliculas/result-pelis/result-pelis.component';

const routes: Routes = [
  {path: 'home', component: Top20PeliculasComponent},
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'searchresult/:param', component: ResultPelisComponent}
];

@NgModule({
  imports: [
      [RouterModule.forRoot(routes)],
       CommonModule
  ],
  exports: [
      RouterModule],
  declarations: []
})
export class AppRoutingModule { }
