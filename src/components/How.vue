<template>
  <div class="wrapper how">
    <section class="content how">
        <h2 class="titulo">¡No busques más!</h2>
        <p>Reunimos en un mismo lugar diseño, comodidad, tranquilidad y privacidad</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'How'
}
</script>

<style>
.titulo { margin-bottom: 40px; font: 50px 'Oswald'; text-transform: uppercase; position: relative;}

p { margin-bottom: 40px; position: relative;}

.content { padding: 80px 0;}
  .how { height: 100vh; background: url(../assets/rooms/rooms_westminster.jpg) no-repeat center; background-size: cover; color: #fff;}

@media (max-width: 600px) {
  .titulo { margin-bottom: 30px;}
  p { margin-bottom: 20px}
}
</style>
