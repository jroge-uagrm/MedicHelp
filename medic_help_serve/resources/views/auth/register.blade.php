@extends('layouts.app')



@section('content')
<div class="content-wrapper">

    <section class="content">
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h2>Elige tu Plan de Preferido</h2>
            <ul>
                <li><form action="/pagar" method="post" >
                    @csrf
                        <input type="text" hidden name="costo" value="50">
                        <input type="submit" value="plan pequeño">
                    </form>
                </li>
                <li><form action="/pagar" method="post" >
                    @csrf
                        <input type="text" hidden name="costo"value="100">
                        <input type="submit" value="plan mediano">
                    </form>
                </li>
                <li><form action="/pagar" method="post" >
                    @csrf
                        <input type="text" hidden name="costo"value="150">
                        <input type="submit" value="plan grande">
                    </form>
                </li>
            </ul>
         </div>
     </div>
    </div>
</section>
@endsection
