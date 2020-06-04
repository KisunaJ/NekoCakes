import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  images = [
    {path: 'assets/Tortas/cake.jpg'},
    {path: 'assets/Tortas/numbercake.jpg'},
    {path: 'assets/Tortas/cuernocake.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
