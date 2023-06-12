import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpinfoService {

  constructor(private http:HttpClient) { }

  getInfo(ip:string):Observable<any>{

    const httpOption = {
      headers: new HttpHeaders({
        'content-type' : 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
      })
    }
    let direccion = "https://community-neutrino-ip-info.p.rapidapi.com/ip-info";

    const body = new HttpParams()
      .set('ip', ip)
        .set('reverse-lookup', 'checked');

    return this.http.post(direccion ,body ,httpOption);
  }
}
