import { Component, OnInit } from '@angular/core';
import { AddPacienteService } from "../../../services/persona/paciente/add-paciente.service";
import { Paciente } from "../../../modules/Paciente";

import * as jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-paciente',
  templateUrl: './list-paciente.component.html',
  styleUrls: ['./list-paciente.component.css']
})
export class ListPacienteComponent implements OnInit {
  paciente:Paciente[]=[];

  constructor(private le:AddPacienteService) { }

  ngOnInit() {
    this.getAll();
  }

  public captureScreenPaciente() //FUNCION PARA DESCARGAR REPORTE 
  {  
    var data = document.getElementById('contentToConvertPaciente');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('ListaDePacientes.pdf'); // Generated PDF   
    });  
  } 

  getAll(){ //Funcion para obtener todos los recursos 
    this.paciente=null;
    this.le.getAllPacientes().subscribe((all)=>{
       this.paciente=all;
       console.log(this.paciente);
     });
    }
}
