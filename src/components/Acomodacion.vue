<template>
  <div class="wrapper acomodation">
    <h2 class="titulo1">Tipos de acomodación</h2>

    <div class="habitacion">
      <aside class="imgacomodacion">
        <figure>
          <img src="../assets/rooms/rooms_westminster.jpg" alt="Logo Tosko">
        </figure>
      </aside>
     <div class="half">
        <section class="descripcion">
          <h3 class="titulo2">Sencilla</h3>
          <p>Para 1 persona</p>
          <ul>
            <li>1 cama doble</li>
            <li>Escritorio</li>
            <li>Internet (wifi)</li>
            <li>T.V. pantalla plana (Television satelital)</li>
            <li>Aire acondicionado</li>
            <li>Minibar (con cargo)</li>
            <li>Amenities (jabón, shampooo, acondicionador, crema corporal, gorro de baño, peinilla, pañuelo y costurero)</li>
            <li>Secador de cabello</li>
            <li>Piscina, Turco, jacuzzi</li>
            <li>Parqueadero</li>
          </ul>
        </section>
      </div>
    </div>
    <div class="habitacion">
      <aside class="imgacomodacion">
        <figure>
            <img src="../assets/rooms/rooms_oxford.jpg" alt="Logo Tosko">
        </figure>
      </aside>
      <div class="half">
        <section class="descripcion">
          <h3 class="titulo2">Doble</h3>
          <p>Máx. 2 personas adultas y hasta de dos menores</p>
          <ul>
            <li>1 cama doble o 2 sencillas</li>
            <li>Escritorio</li>
            <li>Internet (wifi)</li>
            <li>T.V. pantalla plana (Television satelital)</li>
            <li>ire acondicionado</li>
            <li>Amenities (jabón, shampooo, acondicionador, crema corporal, gorro de baño, peinilla, pañuelo y costurero)</li>
            <li>Secador de cabello</li>
            <li>Piscina, Turco, jacuzzi (con cargo)</li>
            <li>Parqueadero</li>
          </ul>
        </section>
      </div>
    </div>
    <div class="habitacion">
      <aside class="imgacomodacion">
        <figure>
            <img src="../assets/rooms/rooms_cambridge.jpg" alt="Logo Tosko">
        </figure>
      </aside>
      <div class="half">
        <section class="descripcion">
          <h3 class="titulo2">Triple</h3>
          <p>Máx. 3 personas adultas y hasta con un menor.</p>
          <ul>
            <li>1 cama doble y 1 sencillas</li>
            <li>Internet (wifi)</li>
            <li>T.V. pantalla plana (Television satelital)</li>
            <li>ire acondicionado</li>
            <li>Amenities (jabón, shampooo, acondicionador, crema corporal, gorro de baño, peinilla, pañuelo y costurero)</li>
            <li>Secador de cabello</li>
            <li>Parqueadero</li>
          </ul>
        </section>
      </div>
    </div>
    <div class="habitacion">
      <aside class="imgacomodacion">
        <figure>
            <img src="../assets/rooms/rooms-piccadilly.jpg" alt="Logo Tosko">
        </figure>
      </aside>
      <div class="half">
        <section class="descripcion">
          <h3 class="titulo2">Cuádruple</h3>
          <p>Máx. 4 personas adultas y para una mayor comodidad e higiene, no se permite hospedar ningún menor.</p>
          <ul>
            <li>2 camas dobles y 2 sencillas</li>
            <li>Internet (wifi)</li>
            <li>T.V. pantalla plana (Television satelital)</li>
            <li>ire acondicionado</li>
            <li>Amenities (jabón, shampooo, acondicionador, crema corporal, gorro de baño, peinilla, pañuelo y costurero)</li>
            <li>Secador de cabello</li>
            <li>Parqueadero</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Acomodacion'
}
</script>

<style>
.acomodation { display: flex; justify-content: inherit;}
.habitacion { height: 100vh; width: 100%;}

.imgacomodacion { width: 50%; overflow: hidden; float:left;}
.imgacomodacion img { height: 100vh; object-fit: cover; object-position: bottom right;}

.half { height: 100vh; width: 50%; float: right;}
.descripcion { display: inline-table; width: 90%; align-items:center; text-align: center; margin-top: 4em;}
  .descripcion p { margin:0}
  .descripcion ul { text-align: left; padding: 0 20px; font-size: 18px; list-style-type: circle;}
.titulo1 {width: 100%; font: 50px 'Oswald'; color:#6CF0E9; text-transform: uppercase; position: absolute; margin-top: 0;}
.titulo2 { font: 50px 'Oswald'; text-transform: uppercase;}

@media (max-width: 480px){
  .acomodation { display: flex; justify-content: inherit;}
  .imgacomodacion { width: 100%; overflow: hidden; float:left;}
  .imgacomodacion img { height: 40vh; object-fit: cover;}

  .half { width: 100%; height: auto;}
  .descripcion { width: 96%; align-items:center; margin-top: 0;}
    .descripcion p { font-size: 14px;}
    .descripcion ul { text-align: left; padding: 0 40px; font-size: 14px; list-style-type: circle;}
  .titulo1 {width: 100%; font: 35px 'Oswald';}
  .titulo2 { font: 35px 'Oswald'; text-transform: uppercase;}
}
</style>

