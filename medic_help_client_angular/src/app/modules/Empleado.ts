export class Empleado{
    id?: string;
    ci: string;
    nombre: string;
    apellido: string;
    fecha_nacimiento: Date;
    email: string;
    telefono: number;
    type: string;
    estado?: string;
    sexo:string;
    
    constructor(ci:string,nombre:string,apellido:string,fecha_nacimiento:Date,email:string,telefono:number,type:string,sexo:string,estado:string){
        this.id=null;
        this.nombre=nombre;
        this.apellido=apellido;
        this.fecha_nacimiento=fecha_nacimiento;
        this.email=email;
        this.telefono=telefono;
        this.type=type;
        this.estado=estado;
        this.sexo=sexo;
        this.ci=ci;
    }
}