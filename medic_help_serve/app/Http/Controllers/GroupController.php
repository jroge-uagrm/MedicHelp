<?php

namespace App\Http\Controllers;


use App\Document;
use App\DocumentGroup;
use App\Employee;
use App\Group;
use App\Http\Controllers\DocumentController;
use App\Patient;
use App\Person;
use App\User;
use App\Service;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;


class GroupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employee=Employee::getEmployeeByUser();
        $employee2=Employee::find($employee)->groups()->get();
        return view('groups.index',compact('employee2'));
        // return $employee2;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('groups.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $group=new Group();
        $group->nombre=$request->input('nombre');
        $group->descripcion=$request->input('descripcion');
        $group->save();
    
        $idEmployee=Employee::getEmployeeByUser();
        $group->employees()->attach($idEmployee,['descargar'=>true,'lectura'=>true,'ocultar'=>true, 'rolGrupo'=>'ad']);
        return redirect('groups')->with('status','Se creó un nuevo grupo correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $group=new Group();
        $group=Group::find($id);
        // $employeesGroup=Group::find($id)->employees()->get();
        $employeesGroup= DB::table('employees_groups')->join('employees','employees.id','=','employees_groups.id_employee')->join('people','people.peopleable_id','=','employees.id')->select('*')->where('people.peopleable_type','=','App\Employee')->where('employees_groups.id_group','=',$id)->get();
        $documents=$documents=DB::table('document_groups')->join('documents','documents.id','=','document_groups.document_id')->select('*')->where('document_groups.document_id','=',1)->get();
        return view('groups.show',compact('group','employeesGroup','documents'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $group= Group::find($id);
        return view('groups.edit',compact("group"));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $group=Group::find($id);
        $group->fill($request->all());
        $group->save(); 
        return redirect('/groups')->with('status', 'Servicio actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
    }

    public function addMember($id){
        //$person= new Person(); 
        // $person=Person::all()->where('peopleable_type', 'App\Employee'); 
        $person=DB::select(DB::raw("SELECT * FROM people, employees WHERE people.peopleable_id=employees.id and employees.id not in (SELECT id_employee FROM employees_groups WHERE employees_groups.id_group={$id})"));
        return view('groups.addMember',compact('person','id'));

    }
    
    public function addNewMember(Request $request){
        $idGroup=$request->input('id_group');
        $group=Group::find($request->input('id_group'));
        $employee=Employee::find($request->input('id'));
        $person=Person::where('peopleable_id', $request->input('id') )->get();

            if ($request->input('descargar')=='true') {
               $descargar=true;
            }else{
                $descargar=false;
            }


            if ($request->input('ocultar')=='true') {
                $ocultar=true;
             }else{
                 $ocultar=false;
             }

             if ($request->input('lectura')=='true') {
                $lectura=true;
             }else{
                 $lectura=false;
             }
            
        $id=$idGroup;
         $group->employees()->attach($request->input('id'),[
            'descargar'=>$descargar,
            'lectura'=>$lectura,
            'ocultar'=>$ocultar,
            'rolGrupo'=>'pa']);
        // return ('/addMember');
        return back();
        

        
    }

    public function showListaPermisos($id){
        $group=Group::find($id);
        $employeesGroup= DB::table('employees_groups')->join('employees','employees.id','=','employees_groups.id_employee')
        ->join('people','people.peopleable_id','=','employees.id')->select('*')->where('people.peopleable_type','=','App\Employee')
        ->where('employees_groups.id_group','=',$id)->get();
        
        return view('groups.listMembers',compact('employeesGroup','group'));
    }

    public function editarPermisos(Request $request){

        $descargar=$this->Boolean($request->input('descargar'));
        $ocultar=$this->Boolean($request->input('ocultar'));
        $lectura=$this->Boolean($request->input('lectura'));
        $group=Group::find($request->input('id_group'));
        $group->employees()->detach($request->input('id'));
        $group->employees()->attach($request->input('id'),['descargar'=>$descargar,'lectura'=>$lectura,'ocultar'=>$ocultar, 'rolGrupo'=>'pa']);
        return back();
    }

    private function Boolean($valor){
        if ($valor=='true') {
            return true;
        }else{
            return false;
        }
    }

     public function formGrupoDoc( $id )
    {
        $usuario = User::find($id);
        // $persona = DB::select('SELECT * FROM `people`WHERE people.user_id = :id',['id' => $usuario->id]);
        $persona = DB::table('people')->select('*')->where('people.user_id','=',$usuario->id)->get();
        //obteniedo el dato de un stdClass
        //trunca#1 no podia obtener los datos desde persona ya que es un stdClass intente en la forma de json,array[][] :(
        $id_empleado = $persona[0]->peopleable_id;
        //Obteniendo todos los grupos al que peretnece el empelado
        $grups = GroupController::GetgruposEmpleado($id_empleado);
        if (sizeof($grups) == 0 ) {
            $Doc_grupos = array();
        }
        foreach ($grups as $GR ) {
        // creando un array multiple para añadir nodos(grupo,documentos del grupo)
        
        $id_grupo = $GR->id_group;
        //esta consulta
        // $g = DB::select('SELECT* FROM groups,document_groups, documents WHERE groups.id= document_groups.group_id AND documents.id=document_groups.document_id AND groups.id = :id',['id' => $id_grupo]);   
        $g = DB::table('document_groups')->join('groups','groups.id','=','document_groups.group_id')->join('documents','documents.id','=','document_groups.document_id')->select('*')->where('groups.id','=',$id_grupo)->get(); 
        $getd= array();
        $getd[] = $GR;
        $getd[] = $g;
        $Doc_grupos[] = $getd;
        }
    
        
        $empleado = Employee::find($id_empleado);
        $documentos = Document::all();
        $pacientes = Patient::all();
        $servicios = Service::all();
        $rutaarchivos= "../storage/archivos/";

        //grupos en los que esta articipando el usuario
        // $grupos = DB::select('SELECT groups.id, groups.nombre from groups,employees_groups,employees WHERE groups.id = employees_groups.id_group AND employees_groups.id_employee = employees.id AND employees.id = :id',['id'=>$id_empleado]);
        $grupos = DB::table('employees_groups')->join('groups','groups.id','=','employees_groups.id_group')
        ->join('employees','employees.id','=','employees_groups.id_employee')->select('groups.id', 'groups.nombre')->where('employees.id','=',$id_empleado)->get();

     return view('formularios.formGrupoDoc')
        ->with('usuario',$usuario)
        ->with('grupos',$grupos)
        ->with("pacientes",$pacientes)
        ->with("empleado",$empleado)
        ->with("documentos",$documentos)
        ->with("rutaarchivos",$rutaarchivos)
        ->with("servicios",$servicios)
        ->with("DocumentosGrupos",$Doc_grupos)
        ->with("Doc_grupos",$Doc_grupos);
     }

    public function agregarDocumento_Grupo(Request $request)
    {   

        $archivo = $request->file('file');
        //validando
        $input = array('file' => $archivo);
        $reglas = array('file' =>'required|max:50000');
        $validacion = Validator::make($input, $reglas);

        if ($validacion->fails())
        {
          return view("mensajes.msj_rechazado")->with("msj","El archivo no es un pdf o es demasiado Grande para subirlo!");
        }else{
        //save archivos
        $id = $request->input("id_usuario");
        $rutas = (new DocumentController)->agregarDocumentoGrupo($archivo,$id);
        $ruta_local = $rutas['ruta_local'];
        $ruta_global = $rutas['ruta_global'];

        //creando documento
        $documento = new Document();
        $documento->descripcion=$request->input("descripcion");          
        $documento->estado="activado";
        $documento->fecha_creacion=date("Y-m-d");// modificar obtener la fecha actual
        $documento->observaciones=$request->input("observacion");
        $documento->id_patient=$request->input("paciente");
        $documento->id_service=$request->input("servicio");
        $documento->id_employee=$request->input("empleado");
        $documento->url_archivo=$ruta_local;
        $documento->url_archivo_global=$ruta_global;;
        $resul= $documento->save();

        //creando relacion documento-grupo avcdass
        // $id_documento = DB::select('SELECT documents.id FROM `documents` WHERE documents.id IN(SELECT MAX(documents.id) FROM documents)');
        $id_documento = Document::all()->max('id');
        $id_grupo =$request->input("grupo");
        $documento_grupo = new DocumentGroup;
        $documento_grupo->document_id = $id_documento;
        $documento_grupo->group_id = $id_grupo;
        $resul = $documento_grupo->save();

        if($resul){            
             return view("mensajes.msj_correcto")->with("msj","Documento Agregada Correctamente"); 
        }else{            
           return view("mensajes.msj_rechazado")->with("msj","hubo un error vuelva a intentarlo");  
        }

    }

    }
    public function GetgruposEmpleado($id_empleado)
    {  
    //    $grupos = DB::select('SELECT * FROM groups, employees_groups WHERE groups.id=employees_groups.id_group AND employees_groups.id_employee =:id',['id' => $id_empleado]);
          $grupos = DB::table('employees_groups')->join('groups','groups.id','=','employees_groups.id_group')->select('*')->where('employees_groups.id_employee','=',$id_empleado)->get();
        return $grupos;
         
    }
    // API
     public function integrantes_de_Grupo(Request $request)
    {   $id_grupo = $request->id_grupo;
        $integrantes = DB::select('SELECT* FROM employees_groups,people,employees WHERE people.peopleable_id=employees.id AND employees.id =employees_groups.id_employee AND employees_groups.id_group =:id',['id' => $id_grupo]);

        return response()->json($integrantes);
         
    }

}
