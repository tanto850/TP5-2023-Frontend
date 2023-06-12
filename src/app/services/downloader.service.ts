import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloaderService {

  constructor(private http:HttpClient) {
    
   }

  getLink(id:string):Observable<any>{

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      })
    }
    let direccion = "https://youtube-mp36.p.rapidapi.com/dl?id=" + id;

    return this.http.get(direccion ,httpOption);
  }

}
