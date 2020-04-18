import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { noConflict } from 'q';
import { UserModel } from '../../login/UserModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  server:string=`https://medic-help-serve.herokuapp.com`;
  constructor(private http:HttpClient) { }
  headers=new HttpHeaders({'Content-Type': 'application/json'});

  addUser(email,password){
    const newUserModel= new UserModel(email,password);
    console.log(newUserModel);
    return this.http.post(this.server+`/api/login`,newUserModel,{headers:this.headers});
  }
  verifLogin(email,password){
    const newUserModel= new UserModel(email,password);
    console.log(newUserModel);
    return this.http.post(this.server+`/api/login`,newUserModel,{headers:this.headers});
  }

  getAllUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(this.server+ `/api/employees`,{headers:this.headers});
  }
  

  getOneUser(no):Observable<UserModel[]>{
    console.log(no);
      return this.http.get<UserModel[]>(this.server+'/api/employees/'+no,{headers:this.headers});
    }

   editUser(empleado){
     
      console.log(empleado);
      return this.http.put(this.server+`/api/employees/`+empleado.id,empleado,{headers:this.headers});
    }

  deleteUser(no):Observable<UserModel>
  {
    return this.http.delete<UserModel>(this.server+'/api/employees/'+no,{headers:this.headers});
  } 
  

}
