<template>
  <div class="wrapper what">
    <section class="content what">
        <h2 class="titulo">Es muy fácil</h2>
        <p>La mejor experiencia de alojamiento a unos clic de distancia</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'What'
}
</script>

<style>


.content { padding: 80px 0;}

.what { height: 100vh; background: url(../assets/rooms/rooms-piccadilly.jpg) no-repeat center top; background-size: cover; color: #fff;position: relative; background-attachment: fixed;}
    .what::before{ height: 100vh; content:''; position: absolute; background-color: rgba(0,0,0,0.7); top:0; bottom: 0; left: 0; right: 0;}
    .what p { max-width: 1055px; margin: 0 auto;}
    .what .titulo { margin-top: 100px;}

@media (max-width: 600px) {
  .titulo { margin-bottom: 30px;}
  p { margin-bottom: 20px}
}
</style>
