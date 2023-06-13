import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css']
})
export class FormProductoComponent implements OnInit {

  producto!:Producto;
  accion:string="";

  constructor(private productoService:ProductoService,
              private activatedRoute : ActivatedRoute) {
    this.producto = new Producto();
   }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      if (params['id'] == "0"){
        this.accion = "new";
      }else {
        this.accion = "update";
        this.cargarProducto(params['id']);
      }
    });
  }
  
  cargarProducto(id:String){
    this.productoService.getProducto(id).subscribe(
      result =>{
        console.log(result);
        Object.assign(this.producto, result);
      },
      error=>{
        console.log(error);
      }
    )
  }

}
