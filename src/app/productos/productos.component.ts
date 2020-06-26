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
  productos: Producto[] = []; //asi se crea un array afuera de un metodo (si, asi)
  
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
      this.llenarArrayProductos();
  }

  // asi creamos un metodo que no recibe parametros!
  // los metodos siempre estan dentro de las llaves que componen la clase
  llenarArrayProductos(){
    var variable = new Producto;
    variable.id = 1;
    variable.nombre = "Chocotorta";
    variable.categoria= "tortas";
    variable.descripcion = "Deliciosa torta de chocolate, recubierta de dulce de leche de almendras, chantilly de coco, con una fina capa de chocolate amargo."
    variable.esSinAzucar = false;
    variable.esSinTacc = true;
    variable.esVegana = true;
    variable.imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    this.productos.push(variable);

    var variable2 = new Producto;
    variable2.id = 2;
    variable2.nombre = "Cupcake marmolado";
    variable2.categoria= "cupcakes";
    variable2.descripcion = "Deliciosa cupcake de avena, con chips de chocolate, y una fina capa de mantequilla de mani de chocolate."
    variable2.esSinAzucar = true;
    variable2.esSinTacc = true;
    variable2.esVegana = false;
    variable2.imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    this.productos.push(variable2);

    var variable3 = new Producto;
    variable3.id = 3;
    variable3.nombre = "CookieChips";
    variable3.categoria= "galletas";
    variable3.descripcion = "Deliciosa galleta de vainilla con chips de chocolate."
    variable3.esSinAzucar = false;
    variable3.esSinTacc = false;
    variable3.esVegana = false;
    variable3.imagen = "https://material.angular.io/assets/img/examples/shiba2.jpg";
    this.productos.push(variable3);
   

}
}
