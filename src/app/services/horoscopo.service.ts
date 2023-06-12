import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Signo } from '../models/signo';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  horoscopo : Array<Signo>;

  constructor(private http : HttpClient) { 
    this.horoscopo = new Array<Signo>();
   }

  getHoroscopo(): Array<Signo> {
    return this.horoscopo;
  }

  addSigno(signo : Signo) {
    this.horoscopo.push(signo);
  }

  getDiaHoroscopo(signo:String):Observable<any>{

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
      })
    }
    let direccion = "https://horoscopes-ai.p.rapidapi.com/get_horoscope/" + signo + '/today/general/es';

    return this.http.get(direccion ,httpOption);
  }

  getMesHoroscopo(signo:String):Observable<any>{

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
      })
    }
    let direccion = "https://horoscopes-ai.p.rapidapi.com/get_horoscope/" + signo + '/monthly/general/es';

    return this.http.get(direccion ,httpOption);
  }

}
