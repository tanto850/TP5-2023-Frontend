import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private ticketService:TicketService,
              private activatedRoute:ActivatedRoute,
              private router:Router) { 
    this.ticket  = new Ticket();
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
  }

}
