export class Paciente{
    id?: string;
    ci: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    email: string;
    telefono: number;
    estado: string='a';
    sexo:string;
    nro_seguro?:string;

    constructor(ci:string,nombre:string,apellido:string,fecha_nacimiento:Date,email:string,telefono:number,sexo:string,nro_seguro:string,estado:string){
        this.id=null;
        this.ci=ci;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha_nacimiento=fecha_nacimiento;
        this.email=email;
        this.telefono=telefono;
        this.estado=estado;
        this.sexo=sexo;
        this.nro_seguro=nro_seguro;
    }
}