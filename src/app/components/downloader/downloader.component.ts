import { Component, OnInit } from '@angular/core';
import { DownloaderService } from 'src/app/services/downloader.service';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent implements OnInit {

  id!:string;
  link!:string;
  resultado!:string;
  mostrar!:string;
  titulo!:string;

  constructor(private downloaderService:DownloaderService) { 
    this.mostrar = 'N';

  }

  ngOnInit(): void {
  }

  convertir(){
    let largo:number = this.link.length;
    let encontre:number;
    let link1:string;
    encontre = this.link.search('/') + 1;
    link1 = this.link.substring(encontre ,largo);
    encontre = link1.search('/') + 1;
    link1 = link1.substring(encontre ,largo);
    encontre = link1.search('/') + 1;
    this.id = link1.substring(encontre ,largo);

    this.downloaderService.getLink(this.id).subscribe(
      result=>{
        this.mostrar    = 'S';
        this.titulo     = result.title;
        this.resultado  = result.link;
      },
      error=>{
        this.mostrar = 'N';
        console.log(error);
      }
    )
  }

}
