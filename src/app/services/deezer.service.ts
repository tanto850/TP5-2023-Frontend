import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portal } from '../models/portal';

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  canciones:Array<Portal>;

  constructor(private http : HttpClient) { 

    this.canciones = new Array<Portal>();
  }

  getCanciones(): Array<Portal> {
    return this.canciones;
  }

  addCancion(cancion : Portal) {
    this.canciones.push(cancion);
  }
  

  getTrack(song:Portal):Observable<any>{

    let httpOption = {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '8034f52893msha40e8a7aaa57215p155a6fjsn2294956a4b4a',
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
      })
    }
    let direccion = "https://deezerdevs-deezer.p.rapidapi.com/track/" + song.trackId;

    return this.http.get(direccion ,httpOption);
  }
}
