import { Component, OnInit } from '@angular/core';
import { Conversor } from 'src/app/models/conversor';
import { ConversorService } from 'src/app/services/conversor.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  param:Conversor;
  transacciones:Array<Conversor>;
  
  constructor(private conversorService:ConversorService) {

    this.param = new Conversor();
    this.transacciones = new Array<Conversor>();

    this.obtenerTrns();

   }

  ngOnInit(): void {
  }

  resultado:string = '';

  convertir(){
    this.conversorService.getDivisa(this.param).subscribe(
      result=>{
        this.param.cantidadDestino = result.result;
        this.param.tasaConversion = '';
        this.conversorService.createTransaccion(this.param).subscribe(
          result=>{
            console.log('Se creó la transaccion');
            alert(result.msg);
            this.param = new Conversor();
            this.obtenerTrns();
          },
          error=>{
            console.log('No se pudo crear la transacción');
            alert(error.msg);
          }
        )
      },
      error=>{
        console.log(error);
      }
    )
  }

  obtenerTrns(){
    this.conversorService.getTransaccions().subscribe(
      result=>{
        Object.assign(this.transacciones, result);
      },
      error=>{
        console.log(error);
      }
    )

  }

}
