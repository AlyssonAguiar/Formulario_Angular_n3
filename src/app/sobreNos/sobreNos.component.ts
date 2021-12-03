import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-sobreNos',
  templateUrl: './sobreNos.component.html',
  styleUrls: ['./sobreNos.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor(private service: SharedService) { }

  ListaUsuarios: any = [];

  ngOnInit(): void {
    this.carregaUsuarios();
  }


  carregaUsuarios(){
    this.service.getUsuarios().subscribe(data=>{
      this.ListaUsuarios=data;
    })
  }
}
