import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5001/FormularioApi";

  constructor(private http: HttpClient) { }

  // getUsuariosList():Observable<any[]>{
  //   return this.http.get<any>(this.APIUrl+'/')
  // }

  postUsuario(usuario: any){
    return this.http.post(this.APIUrl+'/Usuarios',usuario)
  }

  getUsuarios(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Usuarios')
  }

}
