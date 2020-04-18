@extends('layouts.app')



@section('content')
<div class="content-wrapper">

    <section class="content">
    <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <form action="/pagar" method="post" >
                    @csrf
                <input type="text" name="costo" disabled value="{{$costo}}">
                <input type="submit" value="pagar">
            </form>
         </div>
     </div>
    </div>
</section>
@endsection
