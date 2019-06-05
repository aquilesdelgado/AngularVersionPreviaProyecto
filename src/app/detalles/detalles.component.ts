import { Component, OnInit } from '@angular/core';
import { PelisService } from '../service/pelis.service';
import {ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
id: string;
movie: any = {};
  constructor(private activateRoute: ActivatedRoute, private pelisService: PelisService, private router: Router) {
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];

      this.pelisService.getMovieById(this.id).subscribe(datos => {
            this.movie = datos;
          });
    });
  }

  ngOnInit() {
  }
  goBack() {
    window.history.back();
  }
}
