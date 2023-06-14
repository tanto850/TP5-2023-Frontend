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
        console.log(result);
        this.resultado = result.result;
        this.param.resultado = result.result;
        this.param.tasa = result.tasa;
        this.conversorService.createTransaccion(this.param).subscribe(
          result=>{
            alert(result.msg);
            this.param = new Conversor();
            this.obtenerTrns();
          },
          error=>{
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
