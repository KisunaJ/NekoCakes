import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    {path: 'assets/Tortas/cake.jpg'},
    {path: 'assets/Tortas/numbercake.jpg'},
    {path: 'assets/Tortas/cuernocake.jpg'},
    {path: 'assets/Tortas/mixfrutal.jpg'},
    {path: 'assets/Cupcakes/unicorncupcake.jpg'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
