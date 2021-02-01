<template>
  <div class="wrapper logeo">
    <What/>
    <How/>
    <Services/>
    <Localizacion/>

	</div>
</template>

<script>
import What from './What'
import Services from './Services'
import How from './How'
import Localizacion from './Localizacion'

export default {
  name: 'Inicio',
  components: {
    What,
    Services,
    How,
    Localizacion
  },
  data () {
    return {
      msg1: 'Registrarte'
    }
  }
}
</script>

<style>
.wrapper { display: flex; flex-flow:column; align-items:center; justify-content:center; width: 100%; min-height: 100%; background: rgba(255, 255, 255, 0.75);}

.content { display: block; width: 100%; padding-bottom: 100px; align-items:center; text-align: center;}

.form { width: 96%; margin:0 auto; padding-bottom: 30px; text-align: center;}
.col { display: inline-block; width: 49%; margin-bottom: 10px; padding: 0 5px; vertical-align: top; text-align: left;}

.form label { display: block; margin-bottom: 5px; color: rgb(70,70,70); font-size: 16px; text-transform: uppercase;}
  .form .tooltip { display: inline-block; background: rgb(70,70,70); color: #ffffff; border-radius: 50%; height: 16px; width: 16px; text-align: center; line-height: 18px; vertical-align: middle; margin-bottom: 3px;}

  .form input[type="text"], .form input[type="email"], .form input[type="password"], form select { display: block; width: 100%; background: #f1f1f1; border: 0; padding: 5px; height: 35px; margin-bottom: 15px;}
  .form input[type="text"].small { display: inline-block; width: 29.6%; margin-right: 5px;}
  .form .fecha_nacimiento .small:last-child { margin-right: 0;}

  .form p { display: inline-block;font-size: 14px; width: 90%; color: rgb(70,70,70); margin-bottom: 30px;}
  .form .resaltado { color:#6CF0E9;}


  .form input[type="submit"] { background: #6CF0E9; color: #fff; text-align: center; border:0; padding: 10px 20px; font-size: 18px; border-radius: 5px;}

@media (max-width: 370px){
  .content { width: 350px}
  .form label { font-size: 13px;}
  .form input[type="text"].small { width: 28.5%;}
}

@media (max-width: 480px){
  .logo { display: none;}
  .logo img { display: none;}
}
</style>
