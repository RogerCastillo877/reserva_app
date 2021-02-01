<template>
  <div class="wrapper localizacion">
    <section class="content localizacion">
      <h2 class="titulo">Localización</h2>
      <p>Llegar es muy sencillo, estamos ubicados en un sector privilegiado de la ciudad, cerca de lo que necesite</p>
      <figure class="map"><img src="../assets/dummy-mapa.jpg" alt="" title=""></figure>
	  </section>
  </div>
</template>

<script>
export default {
  name: 'Localizacion'
}
</script>

<style>

.localizacion { height: 93vh; background: #ffffff; padding-top:6em; padding-bottom: 10em;}
  .localizacion .map img { max-width: 100%; width: 100%; padding: 0 0 0 0}


@media (max-width: 600px) {
  .localizacion { height: 90vh; padding-bottom: 0; padding-top: 3em;}
}
</style>
