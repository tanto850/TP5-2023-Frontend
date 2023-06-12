import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  direccion:string="http://localhost:3000/api/producto/";

  constructor(private http:HttpClient) { 

  }

  getProducto(param : Producto):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
        'content-type' : 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }

    const body = new HttpParams()
//      .set('from-value', param.valor)
//        .set('from-type', param.deTipo)
//          .set('to_type', param.aTipo);

    return this.http.post(this.direccion ,body ,httpOption);
  }

  getProductos():Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
        'content-type' : 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': 'this.8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    const body = new HttpParams()
//      .set('from-value', param.valor)
//        .set('from-type', param.deTipo)
//          .set('to_type', param.aTipo);

    return this.http.get(this.direccion ,httpOption);
  }


}
