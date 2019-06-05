import { Component, OnInit } from '@angular/core';
import { PelisService } from '../../service/pelis.service';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result-pelis',
  templateUrl: './result-pelis.component.html',
  styleUrls: ['./result-pelis.component.css']
})
export class ResultPelisComponent implements OnInit {
  params: string;
  resultPelis = {};
  slideconfing = {
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    // prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: false
  };

  constructor(private pelisser: PelisService, private activaterouter: ActivatedRoute, private router: Router) {
    this.activaterouter.params.subscribe(params => {
      this.params = params['param'];

      this.pelisser.getSearchResult(this.params).subscribe(datos => {
       this.resultPelis = datos['results'];
     });
    });
  }

  ngOnInit() {
}
  detalles(id: string){
      this.router.navigate(['/detalles', id]);
    }
  }
