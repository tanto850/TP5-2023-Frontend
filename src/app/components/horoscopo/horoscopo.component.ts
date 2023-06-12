import { Component, OnInit } from '@angular/core';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent implements OnInit {

  mostrar:string = 'N';
  horoscopo : Array<Signo>;
  signo : Signo;

  constructor(private service: HoroscopoService) { 

    this.horoscopo = new Array<Signo>();

    this.signo = new Signo();
    this.signo.id = 1;
    this.signo.nombre = 'ARIES';
    this.signo.imagen = 'assets/pagec/aries.jpg'
    this.signo.idApi = 'aries'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 2;
    this.signo.nombre = 'TAURO';
    this.signo.imagen = 'assets/pagec/tauro.jpg'
    this.signo.idApi = 'taurus'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 3;
    this.signo.nombre = 'GÉMINIS';
    this.signo.imagen = 'assets/pagec/gemini.jpg'
    this.signo.idApi = 'gemini'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 4;
    this.signo.nombre = 'CÁNCER';
    this.signo.imagen = 'assets/pagec/cancer.jpg'
    this.signo.idApi = 'cancer'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 5;
    this.signo.nombre = 'LEO';
    this.signo.imagen = 'assets/pagec/leo.jpg'
    this.signo.idApi = 'leo'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 6;
    this.signo.nombre = 'VIRGO';
    this.signo.imagen = 'assets/pagec/virgo.jpg'
    this.signo.idApi = 'virgo'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 7;
    this.signo.nombre = 'LIBRA';
    this.signo.imagen = 'assets/pagec/libra.jpg'
    this.signo.idApi = 'libra'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 8;
    this.signo.nombre = 'ESCORPIO';
    this.signo.imagen = 'assets/pagec/escorpio.jpg'
    this.signo.idApi = 'scorpio'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 9;
    this.signo.nombre = 'SAGITARIO';
    this.signo.imagen = 'assets/pagec/sagitario.jpg'
    this.signo.idApi = 'sagittarius'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 10;
    this.signo.nombre = 'CAPRICORNIO';
    this.signo.imagen = 'assets/pagec/capricornio.jpg'
    this.signo.idApi = 'capricorn'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 11;
    this.signo.nombre = 'ACUARIO';
    this.signo.imagen = 'assets/pagec/acuario.jpg'
    this.signo.idApi = 'aquarius'
    this.service.addSigno(this.signo);

    this.signo = new Signo();
    this.signo.id = 12;
    this.signo.nombre = 'PISCIS';
    this.signo.imagen = 'assets/pagec/piscis.jpg'
    this.signo.idApi = 'pisces'
    this.service.addSigno(this.signo);

    this.leerSignos();

  }

  ngOnInit(): void {
  }

  leerSignos(){
    this.horoscopo = this.service.getHoroscopo();
  }

  titulo!:string;
  generalDia!:string;
  generalMes!:string;
  imagen!:string;

  leerHoroscopo(signo:Signo){
    this.titulo = signo.nombre;
    this.imagen = signo.imagen;
    this.service.getDiaHoroscopo(signo.idApi).subscribe(
      result=>{
        this.mostrar = 'S';
        this.generalDia  = result.general;
        this.service.getMesHoroscopo(signo.idApi).subscribe(
          result=>{
            this.mostrar = 'S';
            this.generalMes  = result.general;
          },
          error=>{
            this.mostrar = 'N';
            console.log(error);
          }
        )
      },
      error=>{
        this.mostrar = 'N';
        console.log(error);
      }
    )
    
  }

}
