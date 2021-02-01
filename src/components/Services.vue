<template>
  <div class="wrapper services">
    <section class="content services">
        <h2 class="titulo">Servicios</h2>
        <p>Servicios incluidos sin restricciones de horario, puedes disfrutar de ellos durante las 24 horas del día durante toda tu estadía</p>
        <ul class="list-services">
            <li>
				<figure>
					<img src="../assets/icons/room.png" height="50px">
					<figcaption>Habitaciones</figcaption>
				</figure>
            </li>
            <li>
				<figure>
					<img src="../assets/icons/laundry.png" height="60px">
					<figcaption>Lavandería</figcaption>
				</figure>
            </li>
            <li>
				<figure>
					<img src="../assets/icons/gym.png" height="60px">
					<figcaption>Gimnasio</figcaption>
				</figure>
            </li>
            <li>
				<figure>
					<img src="../assets/icons/wifi.png" height="50px">
					<figcaption>Internet</figcaption>
				</figure>
            </li>
            <li>
				<figure>
					<img src="../assets/icons/reception.png" height="60px">
					<figcaption>Recepción</figcaption>
				</figure>
            </li>
            <li>
				<figure>
					<img src="../assets/icons/bar.png" height="60px">
					<figcaption>Bar</figcaption>
				</figure>
            </li>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style>
.services { height: 100vh; background: url(../assets/rooms/rooms_victoria.jpg) no-repeat center; background-size: cover; color: #fff; text-align: center; background-attachment: fixed; position: relative;}
 .services::before{ height: 100vh; content:''; position: absolute; background-color: rgba(0,0,0,0.7); top:0; bottom: 0; left: 0; right: 0;}
  .services .titulo { padding-top: 2em;}
.list-services { display: flex; align-items:center; justify-content:center;}
  .list-services figure { display: flex; justify-content:center; align-items:center; flex-flow:column; position: relative; width: 100px; height: 100px;}

  .list-services figure::after { content: " "; position: absolute; left: 0; top: 0; z-index: 0; background: #fff; border-radius: 50%; width: 100px; height: 100px;}
      .list-services img { position: relative; z-index: 1;}

  .list-services li { padding: 0 20px;}
  .list-services figcaption { position: absolute; text-align: center; left: 0; right: 0; bottom: -45px;}

@media (max-width: 600px) {
  .services { height: 100vh;padding-top: 20px;}
    .list-services { display: block;}
    .list-services figure { position: relative; width: 50px; height: 50px; }
    .list-services figure::after { content: " "; position: absolute; left: 0; top: 0; z-index: 0; background: #fff; border-radius: 50%; width: 50px; height: 50px;}
        .list-services img { height: 20px;}

    .list-services li { padding: 0 20px 5px;}
    .services .titulo { padding-top: 0;}
    .list-services figcaption { position: absolute; left: 60px; right: 0; bottom: 10px;}
}
</style>
