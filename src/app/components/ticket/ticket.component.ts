import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({ 
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  tickets = Array<Ticket>();

  constructor(private ticketService : TicketService) {

    this.tickets = new Array<Ticket>();

   }

  ngOnInit(): void {
  }

  cargarTickets(){
    this.ticketService.getTickets().subscribe(
      result=>{
        this.tickets = result;
      },
      error=>{
        console.log(error);
      }
      )
    }
}
