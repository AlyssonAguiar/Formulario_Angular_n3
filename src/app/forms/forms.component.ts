import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {



  usuario: any = {
    primeiroNome: null,
    sobrenome: null,
    genero: null,
    email: null,
    telefone: null,
    teste: null
  };

  constructor(
    private service: SharedService
  ) { }
 
  formularioUsuarios = new FormGroup({
    primeiroNome: new FormControl (''), //(['', [Validators.required ,Validators.minLength(3), Validators.maxLength(28)]]),
    sobrenome: new FormControl (''), //(['', [Validators.required, Validators.minLength(3), Validators.maxLength(70)]]),
    genero: new FormControl (''), //(['', Validators.required]),
    email: new FormControl (''), //(['', [Validators.required, Validators.email]]),
    telefone: new FormControl (''), //(['']),
    teste: new FormControl ('')//(['', Validators.required]),
  })

  teste: any[] | undefined;
  
  ngOnInit() {
    this.teste = this.getTeste();
  }

  onSubmit(){
    this.service.postUsuario(this.formularioUsuarios.value)
  }

  getTeste(){
    return [
      {valor: 's', desc: 'Sim'},
      {valor: 'n', desc: 'Não'}
    ]
  }
}
  

