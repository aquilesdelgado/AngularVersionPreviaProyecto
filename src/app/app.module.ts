import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Top20PeliculasComponent } from './top20-peliculas/top20-peliculas.component';
import { GeneroComponent } from './genero/genero.component';
import { TituloComponent } from './titulo/titulo.component';
import {PelisService} from './service/pelis.service';
import { AddImagePipe } from './add-image.pipe';
import { DetallesComponent } from './detalles/detalles.component';
import { FormularioComponent } from './titulo/formulario/formulario.component';
import {FormsModule} from '@angular/forms';
import { ResultPelisComponent } from './top20-peliculas/result-pelis/result-pelis.component';
import { SlidersComponent } from './top20-peliculas/sliders/sliders.component';
import {SlickModule} from "ngx-slick";






@NgModule({
  declarations: [
    AppComponent,
    Top20PeliculasComponent,
    GeneroComponent,
    TituloComponent,
    AddImagePipe,
    DetallesComponent,
    FormularioComponent,
    ResultPelisComponent,
    SlidersComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        SlickModule.forRoot()

    ],
  providers: [
      PelisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
