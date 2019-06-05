import { Component, OnInit } from '@angular/core';
import { PelisService } from '../../service/pelis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private router: Router, private PelisSer: PelisService) { }

  ngOnInit() {
  }
  guardar(param: string) {
    this.router.navigate(['/searchresult', param]);
  }
}
