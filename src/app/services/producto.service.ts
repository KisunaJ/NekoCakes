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
      imagen:"src/assets/Tortas/chocotorta.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:2,
      nombre:"Choco Cake",
      categoria:"tortas",
      descripcion:"Deliciosa torta de chocolate,rellena de dulce de leche, recubierta de chocolate repostero semi amargo, decorada con trozos chocolate amargo.",
      imagen:"src/assets/Tortas/chococake.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:3,
      nombre:"Choco Fresa",
      categoria:"tortas",
      descripcion:"Deliciosa torta de chocolate,rellena con mermelada de fresa, recubierta de crema chantilly y chocolate repostero semi amargo, decorada con trozos fresas enteras.",
      imagen:"src/assets/Tortas/chocofresa.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:4,
      nombre:"Torta Unicornio",
      categoria:"tortas",
      descripcion:"Delicioso torta de vainilla,rellena con chantilly de colores, recubierta de crema chantilly, decorada con fondant.",
      imagen:"src/assets/Tortas/cuernocake.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:5,
      nombre:"Torta Tres leches",
      categoria:"tortas",
      descripcion:"Delicioso torta de vainilla,rellena con chantilly y mermelada de fresa, recubierta de crema chantilly, y decorada con fresas cortadas.",
      imagen:"src/assets/Tortas/fruticake.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:6,
      nombre:"Torta Mix Frutal",
      categoria:"tortas",
      descripcion:"Delicioso torta de vainilla,rellena con chantilly y mix de frutas en trozos, recubierta de crema chantilly, y decorada con un mix de frutas frescas.",
      imagen:"src/assets/Tortas/mixfrutal.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:7,
      nombre:"Torta Numeros",
      categoria:"tortas",
      descripcion:"Delicioso torta de vainilla o chocolate, recubierta de crema chantilly, y decorada con un mix de flores comestibles y coloridas.",
      imagen:"src/assets/Tortas/numbercake.jpg",
      esVegana:true,
      esSinTacc:true,
      esSinAzucar:false,
    },

    {
      id:8,
      nombre:"Cupcake marmolado",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de avena, con cacao, y una fina capa de mantequilla de mani de chocolate.",
      imagen:"src/assets/Cupcakes/cupcakemarmolado.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },
    
    {
      id:9,
      nombre:"Cupcake chocochips",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de vainilla, decorada con frosting de vainilla y chips de chocolate,.",
      imagen:"src/assets/Cupcakes/chocochipscupcake.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    {
      id:10,
      nombre:"Cupcake de dulce de leche",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de chocolate, decorada con dulce de leche y fragmentos de chocolate,.",
      imagen:"src/assets/Cupcakes/chococupcake.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    {
      id:11,
      nombre:"Cupcake de limón",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de limon, decorada con frosting de fresa, con trozos de limon y frambuesa.",
      imagen:"src/assets/Cupcakes/lemoncupcake.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    {
      id:12,
      nombre:"Cupcake Puppy",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de vainilla, decorada con frosting en forma de perritos adornada con trozos de chocolate y marsmelow.",
      imagen:"src/assets/Cupcakes/puppycake.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    {
      id:13,
      nombre:"Cupcake Unicornio",
      categoria:"cupcakes",
      descripcion:"Delicioso cupcake de chocolate, decorado con frosting de fresa adornada con marsmelow y fondant.",
      imagen:"src/assets/Cupcakes/unicorncupcake.jpg",
      esVegana:false,
      esSinTacc:true,
      esSinAzucar:true,
    },

    { 
    id:14,
    nombre:"CookieChips",
    categoria:"galletas",
    descripcion:"Deliciosa galleta de vainilla con chips de chocolate.",
    imagen:"src/assets/Galletas/cookiechips.jpg",
    esVegana:false,
    esSinTacc:false,
    esSinAzucar:false,
    },

    { 
      id:15,
      nombre:"Cookie Icecream",
      categoria:"galletas",
      descripcion:"Deliciosa galleta de vainilla con forma de icecream, decorada con glasé de colores y chocolate.",
      imagen:"src/assets/Galletas/cokkieicecream.jpg",
      esVegana:false,
      esSinTacc:false,
      esSinAzucar:false,
      },

      { 
        id:16,
        nombre:"Cookie emoji",
        categoria:"galletas",
        descripcion:"Deliciosa galleta de vainilla redonda, decorada con fondant de colores.",
        imagen:"src/assets/Galletas/emojicookie.jpg",
        esVegana:false,
        esSinTacc:false,
        esSinAzucar:false,
        },

        { 
          id:17,
          nombre:"Cookie Kitty",
          categoria:"galletas",
          descripcion:"Deliciosa galleta de vainilla cortada con forma de gato, decorada con glasé de colores.",
          imagen:"src/assets/Galletas/kittycookie.jpg",
          esVegana:false,
          esSinTacc:false,
          esSinAzucar:false,
          },

          { 
            id:18,
            nombre:"Cookie Love",
            categoria:"galletas",
            descripcion:"Deliciosa galleta de vainilla cortada con forma de corazon, decorada con glasé de colores y perlitas de dulce.",
            imagen:"src/assets/Galletas/lovecookies.jpg",
            esVegana:false,
            esSinTacc:false,
            esSinAzucar:false,
            },

            { 
              id:19,
              nombre:"Cookie Cloud",
              categoria:"galletas",
              descripcion:"Deliciosa galleta de vainilla cortada con forma de nube, decorada con glasé blanco y fondant.",
              imagen:"src/assets/Galletas/nubecookie.jpg",
              esVegana:false,
              esSinTacc:false,
              esSinAzucar:false,
              },

              { 
                id:20,
                nombre:"Cookie Unicorn",
                categoria:"galletas",
                descripcion:"Deliciosa galleta de vainilla cortada con forma de unicornio, decorada con glasé de colores.",
                imagen:"src/assets/Galletas/unicorncookie.jpg",
                esVegana:false,
                esSinTacc:false,
                esSinAzucar:false,
                },


  ]; //asi se crea un array afuera de un metodo (si, asi)


  constructor() { }

  traerProductosPor(categoria: string): Observable<Producto[]> {

    return of(this.productos.filter(x => x.categoria == categoria))
  }
}
