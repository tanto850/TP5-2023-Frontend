import { Component, OnInit } from '@angular/core';
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
  tickets:Array<Ticket>;
  espectadores:Array<Espectador>;

  constructor(private ticketService:TicketService) { 
    this.ticket  = new Ticket();
    this.tickets = new Array<Ticket>();
    this.espectadores = new Array<Espectador>();

    this.cargarEspectadores();
  }

  ngOnInit(): void {
  }

  guardarTicket(tic:Ticket){
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
    this.ticketService.updateTicket(tic).subscribe(
      result=>{
        alert('Ticket Actualizado')
      },
      error=>{
        console.log(error);
      }
    )
  }

}
