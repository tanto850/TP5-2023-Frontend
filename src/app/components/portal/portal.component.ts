import { Component, OnInit } from '@angular/core';
import { Portal } from 'src/app/models/portal';
import { DeezerService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {

  canciones:Array<Portal>;
  cancion : Portal;
  mostrar!:string;
  titulo!:string;
  imagen!:string;

  constructor(private deezerService:DeezerService) { 
    this.canciones = new Array<Portal>();
    this.mostrar   = 'N'
    this.cancion   = new Portal();

    this.cancion.id = 1;
    this.cancion.nombre = 'Punto G';
    this.cancion.artista = 'Quevedo';
    this.cancion.trackId = 1958545857;
    this.cancion.imagen = 'assets/pagea/quevedo.jpg';
    this.deezerService.addCancion(this.cancion);

    this.cancion   = new Portal();

    this.cancion.id = 2;
    this.cancion.nombre = 'TQG';
    this.cancion.artista = 'Karol G, Shakira';
    this.cancion.trackId = 2154046487;
    this.cancion.imagen = 'assets/pagea/karolg.jpg';
    this.deezerService.addCancion(this.cancion);

    this.cancion   = new Portal();

    this.cancion.id = 3;
    this.cancion.nombre = 'Las 12';
    this.cancion.artista = 'Ana Mena, Belinda';
    this.cancion.trackId = 2190770737;
    this.cancion.imagen = 'assets/pagea/anamena.jpg';
    this.deezerService.addCancion(this.cancion);

    this.cancion   = new Portal();

    this.cancion.id = 4;
    this.cancion.nombre = 'Tamo en Nota';
    this.cancion.artista = 'Rauw Alejandro';
    this.cancion.trackId = 2144480517;
    this.cancion.imagen = 'assets/pagea/rauw.jpg';
    this.deezerService.addCancion(this.cancion);

    this.cancion   = new Portal();

    this.cancion.id = 5;
    this.cancion.nombre = 'Tormenta';
    this.cancion.artista = 'Gorillaz, Bad Bunny';
    this.cancion.trackId = 2156158667;
    this.cancion.imagen = 'assets/pagea/gorillaz.jpg';
    this.deezerService.addCancion(this.cancion);

    this.cancion   = new Portal();

    this.cancion.id = 6;
    this.cancion.nombre = 'Epic Solete';
    this.cancion.artista = 'The Tyets, Figa Flawas';
    this.cancion.trackId = 2149463997;
    this.cancion.imagen = 'assets/pagea/thetyets.jpg';
    this.deezerService.addCancion(this.cancion);

    this.leerCanciones();

  }

  leerCanciones(){
    this.canciones = this.deezerService.getCanciones();
  }

  ngOnInit(): void {
  }

  preview:string = '';

  obtenerTrack(cancion:Portal){
    this.titulo = cancion.nombre;
    this.imagen = cancion.imagen;
    this.deezerService.getTrack(cancion).subscribe(
      result=>{
        this.mostrar = 'S'
        this.preview = result.preview;
      },
      error=>{
        this.mostrar = 'N'
        console.log(error);
      }
    )
  }

}
