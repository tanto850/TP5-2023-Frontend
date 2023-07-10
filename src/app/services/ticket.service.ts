import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  direccion:string="http://localhost:3000/api/ticket/";

  constructor(private http:HttpClient) { 

  }

  getTicket(id:String):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
      })
    }

    const body = new HttpParams()
    return this.http.get(this.direccion + id ,httpOption);
  }

  getTickets():Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()
//      .set('from-value', param.valor)
//        .set('from-type', param.deTipo)
//          .set('to_type', param.aTipo);

    return this.http.get(this.direccion ,httpOption);
  }

  createTicket(prod:Ticket):Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
      })
    }
    const params = new HttpParams()
//      .set('from-value', param.valor);
    let body = JSON.stringify(prod);

    return this.http.post(this.direccion ,body ,httpOption);
  }

  updateTicket(id:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        "Content-Type" : "application/json"
      }),
      params : new HttpParams({

      })
    }
    let tic = this.getTicket(id);
    let body = JSON.stringify(tic);
    console.log(tic);
    return this.http.put(this.direccion + "update/" + id ,body ,httpOptions);
  }

  getEspectadores():Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()

    return this.http.get("http://localhost:3000/api/espectadores/" ,httpOption);
  }
}
