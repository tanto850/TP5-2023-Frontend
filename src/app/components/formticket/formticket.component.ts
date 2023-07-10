import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Espectador } from 'src/app/models/espectador';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-formticket',
  templateUrl: './formticket.component.html',
  styleUrls: ['./formticket.component.css']
})
export class FormticketComponent implements OnInit {

  ticket:Ticket;
  accion!:string;
  tickets:Array<Ticket>;
  espectadores:Array<Espectador>;

  constructor(private ticketService:TicketService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 
    this.ticket  = new Ticket();
    this.tickets = new Array<Ticket>();
    this.espectadores = new Array<Espectador>();

    this.cargarEspectadores();
  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      if (params['id'] == "0"){
        this.accion = "new";
      }else {
        this.accion = "update";
        this.cargarTicket(params['id']);
      }
    });
  }

  guardarTicket(tic:Ticket){
    this.ticketService.createTicket(tic).subscribe(
      result =>{
        alert(result.msg);
        this.ticket = new Ticket();
      },
      error=>{
        alert(error.msg);
      }
    )
  }

  cargarTicket(id:string){
    this.ticketService.getTicket(id).subscribe(
      result =>{
        this.ticket = new Ticket();
      },
      error=>{
        alert(error.msg);
      }
    )
  }

  cancelar(){
    this.router.navigate(['ticket']);
  }

  modificarTicket(tic:Ticket){
    this.ticketService.updateTicket(tic._id).subscribe(
      result =>{
        this.ticket = new Ticket();
      },
      error=>{
        alert(error.msg);
      }
    )
    this.ticketService.createTicket(tic).subscribe(
      result=>{
        alert('Ticket creado')
      },
      error=>{
        console.log(error);
      }
    )
  }

  cargarEspectadores(){
    this.ticketService.getEspectadores().subscribe(
      result=>{
        this.espectadores = result;
      },
      error=>{
        console.log(error);
      }
    )
  }

  actualizarTicket(tic:Ticket){
    this.ticketService.updateTicket(tic._id).subscribe(
      result=>{
        alert('Ticket Actualizado')
      },
      error=>{
        console.log(error);
      }
    )
  }

}
