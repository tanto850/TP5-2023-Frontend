import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productos!:Array<Producto>;

  constructor(private productoService:ProductoService) { 
    this.productos = new Array<Producto>();
    this.cargarProductos();
  }

  ngOnInit(): void {
  }

  cargarProductos(){
    this.productoService.getProductos().subscribe(
      result=>{
//        this.mostrar = 'S';
        //this.productos  = result;
        let unProducto:Producto = new Producto();
        result.forEach((element:any) =>{
          Object.assign(unProducto,element)
          this.productos.push(unProducto)
          unProducto = new Producto();
        });
      },
      error=>{
//        this.mostrar = 'N';
        console.log(error);
      }
    )
  }

  verProducto(p:Producto){
    
  }

}
