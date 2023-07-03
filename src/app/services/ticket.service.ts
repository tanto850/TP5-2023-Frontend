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

    return this.http.get(this.direccion ,httpOption);
  }

  createTicket(tic:Ticket):Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
      })
    }
    const params = new HttpParams()
//      .set('from-value', param.valor);
    let body = JSON.stringify(tic);

    return this.http.post(this.direccion ,body ,httpOption);
  }

  getEspectadores():Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
      })
    }
    const body = new HttpParams()

    return this.http.get("http://localhost:3000/api/espectadores/" ,httpOption);
  }

  updateTicket(tic:Ticket):Observable<any>{
    
    const httpOption = {
      headers: new HttpHeaders({
        "Content-type":"application/json"
      })
    }
    const params = new HttpParams()
//      .set('from-value', param.valor);
    let body = JSON.stringify(tic);

    return this.http.post(this.direccion ,body ,httpOption);
  }


}
