// aqui creamos un objeto con ciertas caracteristicas que despues sera instanciado en otras partes
//del proyecto cuando necesite un objeto con las mismas caracteristicas sin tener que repetir codigo.

export class Producto {

    id: number;
    nombre: string;
    categoria: string;
    descripcion: string;
    imagen: string; // se usa string porque en ella pondremos la ruta de la imagen
    esVegana: boolean;
    esSinTacc: boolean;
    esSinAzucar: boolean;
    
}