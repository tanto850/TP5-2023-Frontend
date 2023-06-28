import { Component, OnInit } from '@angular/core';
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

  constructor(private ticketService:TicketService) { 
    this.ticket  = new Ticket();
    this.tickets = new Array<Ticket>();
  }

  ngOnInit(): void {
  }

  guardarTicket(tic:Ticket){
    
  }

}
