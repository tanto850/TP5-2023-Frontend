import { Injectable } from '@angular/core';
import { Conversor } from '../models/conversor';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  constructor(private http:HttpClient) { 

  }

  getDivisa(param : Conversor):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
        'content-type' : 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    let direccion = "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";

    const body = new HttpParams()
      .set('from-value', param.valor.toString())
        .set('from-type', param.deTipo)
          .set('to_type', param.aTipo);

    return this.http.post(direccion ,body ,httpOption);
  }

  createTransaccion(trans:Conversor):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
      })
    }

    let direccion = "http://localhost:3000/api/transaccion/";

    const params = new HttpParams()
    //  .set('from-value', param.valor)
    //    .set('from-type', param.deTipo)
    //      .set('to_type', param.aTipo);
    let body = JSON.stringify(trans);
    
    return this.http.post(direccion ,body ,httpOption);
  }

  getTransaccions():Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
      })
    }

    let direccion = "http://localhost:3000/api/transaccion/";

    const params = new HttpParams()
    
    return this.http.get(direccion ,httpOption);
  }

}
