import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { noConflict } from 'q';
import { Especialidad } from 'src/app/modules/Especialidad';

@Injectable({
  providedIn: 'root'
})
export class ListEspecialidadService {
  //server:string=`http://127.0.0.1:8000`;
  server:string=`https://medic-help-serve.herokuapp.com`;
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({'Content-Type': 'application/json'});

  addEspecialidad(nombre){
    const newEspacialidad= new Especialidad(nombre);
    console.log(newEspacialidad);
    return this.http.post(this.server+`/api/Especialidad/store`,newEspacialidad,{headers:this.headers});
  }

  getAllEspecialidads():Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>(this.server+ `/api/Especialidad/index`,{headers:this.headers});
  }
  

  getOneEspecialidad(no):Observable<Especialidad[]>{
    console.log(no);
      return this.http.get<Especialidad[]>(this.server+'/api/Especialidad/'+no,{headers:this.headers});
    }

   editEspecialidad(empleado){
     
      console.log(empleado);
      return this.http.put(this.server+`/api/Especialidad/`+empleado.id,empleado,{headers:this.headers});
    }

  deleteEspecialidad(no):Observable<Especialidad>
  {
    return this.http.delete<Especialidad>(this.server+'/api/Especialidad/'+no,{headers:this.headers});

  } 
  

}
