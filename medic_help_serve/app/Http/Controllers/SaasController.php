<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class SaasController extends Controller
{
    public function showSubscriptions()
    {
      return View('SaaSshowSubscriptions');
    }
    public function generateMoney(Request $request){
      $cost=$request->input('cost');
      return View('SaaSgenerateMoney',compact('cost'));
    }
    public function pay(Request $request){
      $value=$request->input('value');
      $currency=$request->input('currency');
      return "Ready";
    }
    public function approval(){
      
    }
    public function cancelled(){
    
    }
}
