import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserModel } from './UserModel';

@Injectable()
export class PeticionesService{
    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url="https://medic-help-serve.herokuapp.com/";
    }
    verifLogin(user:UserModel):Observable<any>{
        let params=JSON.stringify(user);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+`api/login`,user,{headers:headers});
    }
}