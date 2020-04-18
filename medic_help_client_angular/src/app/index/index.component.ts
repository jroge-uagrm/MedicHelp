import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private secure:string[];
  public loggedPersonName:string;
  private encPassword:string;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { 
    console.log("CONSTR");
    this.encPassword="mh.,.,.a,";
  }
  ngOnInit() {
    console.log("onINIT");
    this._route.params.subscribe((params: Params) => {
      console.log(params.loggedPersonName);
      //this.loggedPersonName = CryptoJS.AES.decrypt(params.loggedPersonName.trim(), this.encPassword.trim()).toString(CryptoJS.enc.Utf8);
      //console.log(this.loggedPersonName);
      //this.secure=this.loggedPersonName.split("h.,.,.a,");
      // if(this.secure.length==2){
      //   if(this.secure[1]!="invitado"){
      //     this.loggedPersonName=this.secure[1];
      //   }
      //   localStorage.setItem("showNavbar","yes");
      // }
      this.loggedPersonName=localStorage.getItem("loggedPersonName");
    });
  }
}
