import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { noConflict } from 'q';
import { Empleado } from 'src/app/modules/Empleado';

@Injectable({
  providedIn: 'root'
})
export class ListEmpleadoService {
  server:string=`https://medic-help-serve.herokuapp.com`;
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({'Content-Type': 'application/json'});

  addEmpleado(nombre,apellido,ci,telefono,fecha_nacimiento,email,sexo,type,estado){
    console.log(sexo);
    const newEmpleado= new Empleado(ci,nombre,apellido,fecha_nacimiento,email,telefono,type,sexo,estado);
    console.log(newEmpleado);
    return this.http.post(this.server+`/api/employees`,newEmpleado,{headers:this.headers});
  }

  getAllEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.server+ `/api/employees`,{headers:this.headers});
  }
  

  getOneEmpleado(no):Observable<Empleado[]>{
    console.log(no);
      return this.http.get<Empleado[]>(this.server+'/api/employees/'+no,{headers:this.headers});
    }

   editEmpleado(empleado){
     
      console.log(empleado);
      return this.http.put(this.server+`/api/employees/`+empleado.id,empleado,{headers:this.headers});
    }

  deleteEmpleado(no):Observable<Empleado>
  {
    return this.http.delete<Empleado>(this.server+'/api/employees/'+no,{headers:this.headers});
  } 
  

}
