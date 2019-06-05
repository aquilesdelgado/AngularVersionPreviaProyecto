import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';


@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  @Input() arrayPelis: any;
  @Output() detalles: EventEmitter<any>;
  slideconfing = {
    slidesToShow: 4,
    slidesToScroll: 4,
    // nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    // prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: false
  };

  constructor() {this.detalles = new EventEmitter<any>(); }

  ngOnInit() {
    // this.sliderInit();
  }

  irPelis(id: any) {
    this.detalles.emit(id);
  }

  // sliderInit() {
  //
  // }
}
