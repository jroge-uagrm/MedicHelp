<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagarController extends Controller
{
    public function pagar(Request $req){
    	$costo = $req->costo;

    	return view('sas.index',compact('costo'));


    }
}
