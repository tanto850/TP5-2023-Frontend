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
  

  constructor(private conversorService:ConversorService) {

    this.param = new Conversor();

   }

  ngOnInit(): void {
  }

  resultado:string = '';

  convertir(){
    this.conversorService.getDivisa(this.param).subscribe(
      result=>{
        console.log(result);
        this.resultado = result.result;
      },
      error=>{
        console.log(error)
      }
    )
  }

}
