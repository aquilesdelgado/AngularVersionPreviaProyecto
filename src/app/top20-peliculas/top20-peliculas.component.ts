import { Component, OnInit } from '@angular/core';
import { PelisService } from '../service/pelis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top20-peliculas',
  templateUrl: './top20-peliculas.component.html',
  styleUrls: ['./top20-peliculas.component.css']
})
export class Top20PeliculasComponent implements OnInit {

  constructor(private PelisSer: PelisService, private router: Router) { }

  peliculas = [];
  comedia = [];
  accion = [];
  horror = [];
  romance = [];

  ngOnInit() {

    this.PelisSer.getPelis().subscribe(datos => this.peliculas = datos["results"]);
    this.PelisSer.getPelisComedia().subscribe(datos => this.comedia = datos["results"]);
    this.PelisSer.getPelisAccion().subscribe(datos => this.accion = datos["results"]);
    this.PelisSer.getPelisHorror().subscribe(datos => this.horror = datos["results"]);
    this.PelisSer.getPelisRomance().subscribe(datos => this.romance = datos["results"]);

  }
  irPelis(id: string) {
    this.router.navigate(['/detalles', id]);
  }
}
