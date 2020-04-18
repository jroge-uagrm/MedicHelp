Estas son nuestras suscripciones!!!
<ul>
    <li>
        <form action="/subscriptionSelected" method="post">
            {{csrf_field()}}
            <input type="text" hidden name="cost" value="50">
            <input type="submit" value="Empresa pequeña" />
        </form>
        <ul>
            <li>50 GB de almacenamiento</li>
            <li>5 Usuarios</li>
            <li>Asistencia cada fin de mes</li>
            <li>50Bs / mes</li>
        </ul>
    </li>
    <li>
        <form action="/subscriptionSelected" method="post">
            {{csrf_field()}}
            <input type="text" hidden name="cost" value="100">
            <input type="submit" value="Empresa mediana" />
        </form>
        <ul>
            <li>100 GB de almacenamiento</li>
            <li>10 Usuarios</li>
            <li>Asistencia fines de semana</li>
            <li>100Bs / mes</li>
        </ul>
    </li>
    <li>
        <form action="/subscriptionSelected" method="post">
            {{csrf_field()}}
            <input type="text" hidden name="cost" value="200">
            <input type="submit" value="Empresa grande" />
        </form>
        <ul>
            <li>200 GB de almacenamiento</li>
            <li>20 Usuarios</li>
            <li>Asistencia todos los dias</li>
            <li>200Bs / mes</li>
        </ul>
    </li>
</ul>
