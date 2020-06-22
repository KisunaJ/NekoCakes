import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})

// esta es la clase principal de este componente (cada componente se le crea una que es necesaria para el funcionamiento de la aplicacion)
// esta clase necesita ser llenada con codigo o tira error xD.
export class ProductosComponent implements OnInit { //esta linea no se modifica

  //aca abajo creare todas las variables que necesite para que este componente funcione
  //asi se crea una variable
  titulo: string;
  productos: Producto[]; //asi se crea un array afuera de un metodo (si asi)
  
  // aqui cree una variable del tipo (ActivatedRoute) que servira para obtener los parametros de la url
  constructor(private activatedRoute: ActivatedRoute) { }

  // esto es lo primero que se va a ejecutar cuando llamemos este componente, lo que eprmite ejecutar codigo sin acciones en la pantalla (como clicks y esas cosas)
  ngOnInit() {
    
    // llamando la variable creada anteriormente y usando params, podemos obtener los parametros de la url
    // el suscribe sirve para capturar el dato que devuelve la funcion params.
    this.activatedRoute.params.subscribe(result => 
      {
        // el valor que recibe suscribe se guardara en este caso en la variable "result"
        //en este caso puedo obtener el valor de "titulo" segun el "routes"
        this.titulo = result['nombreproducto'];
      })

  }

  // asi creamos un metodo que no recibe parametros!
  // los metodos siempre estan dentro de las llaves que componen la clase
  llenarArrayProductos(){
    var variable = new Producto;
  }

}
