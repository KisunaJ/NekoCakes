import { Injectable } from '@angular/core';
import { Producto } from '../models/producto'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productos: Producto[] = [

    {
      id:1,
      nombre:"Chocotorta",
      categoria:"tortas",
      descripcion:"Deliciosa torta de chocolate, recubierta de dulce de leche de almendras, chantilly de coco, con una fina capa de chocolate amargo.",
      imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:2,
      nombre:"Cupcake marmolado",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de avena, con chips de chocolate, y una fina capa de mantequilla de mani de chocolate.",
      imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    { 
    id:3,
    nombre:"CookieChips",
    categoria:"galletas",
    descripcion:"Deliciosa galleta de vainilla con chips de chocolate.",
    imagen:"https://material.angular.io/assets/img/examples/shiba2.jpg",
    esVegana:false,
    esSinTacc:false,
    esSinAzucar:false,
    }


  ]; //asi se crea un array afuera de un metodo (si, asi)


  constructor() { }

  traerProductosPor(categoria: string): Observable<Producto[]> {

    return of(this.productos.filter(x => x.categoria == categoria))
  }
}
