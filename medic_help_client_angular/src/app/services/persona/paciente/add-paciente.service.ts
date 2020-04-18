import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { noConflict } from 'q';
import { Paciente } from 'src/app/modules/Paciente';

@Injectable({
  providedIn: 'root'
})
export class AddPacienteService {
  // server:string=`https://medic-help-serve.herokuapp.com`;
  localserver:string=`https://medic-help-serve.herokuapp.com`;

  constructor(private http:HttpClient) { }

  headers=new HttpHeaders({'Content-Type': 'application/json'});

  addPaciente(nombre,apellido,ci,telefono,fecha_nacimiento,email,sexo,nro_seguro,estado){
    const newPaciente= new Paciente(ci,nombre,apellido,fecha_nacimiento,email,telefono,sexo,nro_seguro,estado);
    console.log(newPaciente);

    return this.http.post(this.localserver+`/api/patients`,newPaciente,{headers:this.headers});
  }
  getAllPacientes():Observable<Paciente[]>{
    return this.http.get<Paciente[]>(this.localserver+ `/api/patients`,{headers:this.headers});
    // this.server+ `/api/patients`
  }
  getOnePaciente(no):Observable<Paciente[]>{
    console.log(no);
      return this.http.get<Paciente[]>(this.localserver+'/api/patients/'+no,{headers:this.headers});
    }

    editPaciente(paciente){
      console.log(paciente);
      return this.http.put(this.localserver+`/api/patients/`+paciente.id,paciente,{headers:this.headers});
    }

  
}
