import { Component, OnInit } from '@angular/core';
import { IpinfoService } from 'src/app/services/ipinfo.service';

@Component({
  selector: 'app-ipinfo',
  templateUrl: './ipinfo.component.html',
  styleUrls: ['./ipinfo.component.css']
})
export class IpinfoComponent implements OnInit {

  pais!:string;
  ciudad!:string;
  fechaLugar!:string;
  horaLugar!:string;
  zona!:string;
  ip!:string;
  mostrar!:string;
  latitud!:number;
  longitud!:number;
  link!:string;

  constructor(private ipinfoService : IpinfoService) {

   }

  ngOnInit(): void {
  }

  obtenerInfo(){
    this.mostrar = "N";
    this.link = "https://maps.google.com/?q="
    this.ipinfoService.getInfo(this.ip).subscribe(
      result=>{
        this.mostrar = 'S';
        console.log(result);
        this.pais       = result.country;
        this.ciudad     = result.city;
        this.fechaLugar = result.timezone.date;
        this.horaLugar  = result.timezone.time;
        this.zona       = result.timezone.name;
        this.latitud    = result.latitude;
        this.longitud   = result.longitude;
        this.link = this.link + this.latitud + "," + this.longitud ;
      },
      error=>{
        console.log(error)
      }
    )
  }

}
