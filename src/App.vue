<template>
  <div id="app">
    <header class="header">
        <figure>
            <img src="./assets/tosko/Logo Tosko.png" alt="Logo Tosko">
        </figure>
        <h1>Tosko</h1>
        <nav class="navbar">
            <a v-on:click="inicial">Inicio</a>
            <a v-on:click="acomodar">Tipos de acomodación</a>
            <a v-on:click="comun">Comunidad</a>
        </nav>

        <a class="btn" v-on:click="logIn2" v-if="not_is_auth">Iniciar sesión</a>
        <a class="btn1" v-on:click="logOut" v-if="is_auth">Cerrar sesión</a>

        <div class="contenedor-modal">
          <a href="#menu" id="show-modal"><i class="fa fa-bars fa-2x"></i></a>
          <aside id="menu" class="modal">
            <div class="content-modal">
                <a href="#" class="close-modal" v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a>
              <section>
                <ul>
                  <li><a href="#" v-on:click="inicial">Inicio</a></li>
                  <li><a href="#" v-on:click="acomodar">Acomodación</a></li>
                  <li><a href="#" v-on:click="comun">Comunidad</a></li>
                </ul>
              </section>
            </div>
          </aside>
        </div>
    </header>

    <div class="main-component">
      <nav >
        <a v-on:click="make_reserva">Reservar</a><!--v-if="is_auth"-->
        <a v-on:click="get_reserva">Consultar</a>
        <a v-on:click="cancel_reserva">Cancelar</a>
      </nav>
      <router-view v-on:log-in="logIn"></router-view>
    </div>

    <footer class="footer">
        <div>
            <figure>
                <img src="./assets/tosko/Logo Tosko.png" alt="Logo Tosko">
            </figure>
            <p>Roger Castillo &copy; Tosko</p>
            <p>Contacto: info@tosko.co</p>
            <div class="redes">
              <a href="http://www.facebook.com"><i class="fa fa-facebook-f fa-2x"></i></a>
              <a href="http://www.twitter.com"><i class="fa fa-twitter fa-2x"></i></a>
              <a href="http://www.youtube.com"><i class="fa fa-youtube fa-2x"></i></a>
              <a href="https://www.whatsapp.com/?lang=es"><i class="fa fa-whatsapp fa-2x"></i></a>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
import Inicio from './components/Inicio.vue'
import Login from './components/Login.vue'
import Registrarse from './components/Registrarse.vue'
import Localizacion from './components/Localizacion'
import What from './components/What'
import Services from './components/Services'
import How from './components/How'

export default {
  name: 'App',
  components: {
    Inicio,
    Registrarse,
    Login,
    Localizacion,
    What,
    Services,
    How
  },
  data: function(){
    return {
      is_auth: false,
      not_is_auth: true,
      username: "",
      password: ""
    }
  },
  methods: {
    inicial: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
      }
    },
    acomodar: function(){
      if(this.$route.name != "acomodacion"){
        this.$router.push({name: "acomodacion"})
      }
    },
    comun: function(){
      if(this.$route.name != "comunidad"){
        this.$router.push({name: "comunidad"})
      }
    },
    updateAuth: function(){
        let self = this
        if(self.is_auth == false)
          self.$router.push({name: "login_usuario"})
        else{
          self.$router.push({name: "inicio"})
        }
    },
    logIn2: function(){
      if(this.$route.name != "login_usuario"){
        this.$router.push({name: "login_usuario"})
      }
    },
    logIn: function(){
      this.is_auth = !this.is_auth
      this.not_is_auth = !this.not_is_auth
      this.updateAuth()
    },
    logOut: function(){
      this.is_auth = !this.is_auth
      this.not_is_auth = !this.not_is_auth
      this.updateAuth()
    },
    get_reserva: function(){
      if(this.$route.name != "consultar_reserva"){
        this.$router.push({name: "consultar_reserva"})
      }
    },
    make_reserva: function(){
      if(this.$route.name != "hacer_reserva"){
        this.$router.push({name: "hacer_reserva"})
      }
    },
    cancel_reserva: function () {
      if(this.$route.name != "cancelar_reserva"){
        this.$router.push({name: "cancelar_reserva"})
      }
    },
    registrar_usuario: function(){
      if(this.$route.name != "registro_user"){
        this.$router.push({name: "registro_user"})
      }
    }
  },
  // Esta es la función que arranca el inicio
  beforeCreate: function(){
    this.$router.push({name: "inicio"})
  }
}
</script>

<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* { box-sizing:border-box;}

#app { text-align: center; font:300 20px/1.7 'Roboto Condensed', Helvetica, sans-serif;}
.header { width: 100%; display: flex; align-items: center; position: fixed; z-index: 1000; height: 70px; background: rgb(70,70,70); padding: 15px 0%;}
.header h1 { align-items:flex-start; font-size: 1.5em;  font-weight: 500;color:#ffffff;}
.header img { margin: 0 20px; height: 30px; vertical-align: bottom;}
.navbar { height: 63px; display: flex; align-items:center; margin-left: auto; margin-right: 20px;}
.navbar button { padding: 0 20px; color: #ffffff; text-decoration: none; text-transform: uppercase; font: 20px 'Oswald'; font-weight: 600; background: rgb(70,70,70); cursor: pointer;}
.navbar a { padding: 0 20px; color: #ffffff; text-transform: uppercase; font: 20px 'Oswald'; font-weight: 600; border-color: none; cursor: pointer;}
.btn { display: inline-table; text-decoration: none; text-transform: uppercase; font: 20px 'Oswald'; font-weight: 600; padding: 1px 20px; background: #6CF0E9; border:2px solid #6CF0E9; color: #ffffff; border-radius: 25px; position: unset; margin-right: 20px; float: right;}
.btn:hover { background:#9EDB88; cursor: pointer;}
.btn1 { display: inline-table; text-decoration: none; text-transform: uppercase; font: 20px 'Oswald'; font-weight: 600; padding: 1px 20px; background: #FF4AA1; border:2px solid #FF4AA1; color: #ffffff; border-radius: 25px; position: unset; margin-right: 20px; float: right;}
.btn1:hover { background: #6CF0E9; cursor: pointer;}
.contenedor-modal { display: none;}
.footer { background: rgb(70,70,70); color:#fff; width: 100%; padding: 20px 0%; display: inline-table; width: 100%; justify-content: flex-start; align-items: center; max-height: 100px;}
.footer img{ height: 30px; margin: 0 20px; float: left;}
.footer p { margin-bottom: 0px; display: inline; float: left; padding: 0 100px 0 0;}
.footer a { float: right;}
.footer .fa { color:#ffffff; margin: 0 20px 0 0; float: left;}
.redes { margin: 0 15px 0 0;}
.main-component { min-height: 90vh; padding-top: 3.5em;}
.main-component nav { height: 34px; display: inline; color: rgb(70,70,70); text-decoration: none; text-transform: uppercase; font: 20px 'Oswald'; font-weight: 600;}
.main-component nav a{padding: 0 20px; border:2px solid #6CF0E9;}
.main-component nav a { cursor: pointer;}
/* Boton */
#show-modal { display: flex;text-align: center; background: rgb(70,70,70); color:#ffffff; font-size: 1em; text-decoration: none; transition: all 0.15s linear;  margin-left: 5px; margin-right: 15px;}

/* ventana interna */
.modal { position: fixed; top: -100vh; left: 0; z-index: 99999999; background: rgba(255, 255, 255, 0.9); width: 100vw; height: 100vh; opacity: 0; transition: opacity 0.35s ease;}
.modal .content-modal { width: 100%; max-width: 500px; position: fixed; left: 50%; top: -100vh; transition: top 0.35s ease; margin-left: -250px; background: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.1); border-radius: 2px; z-index: 9999999;}
.modal section { font-size: 1.5em; height: 15em; background: #ffffff; padding: 120px 0;}
.close-modal { display:flex; position: absolute; top: 0.2em; right: 0.375em; margin: 0; padding: 5px; font-size: 1em; text-decoration: none;}
.modal .fa { color: #FF4AA1;}
.modal a { text-decoration: none; color: rgb(70,70,70);}
/*fondo negro*/
.modal:target { opacity: 1; top: 0;}
.modal .btn-close-modal { position: absolute; left: 0; width: 100%; height: 100%; z-index: 999999;}
/* aparce la ventana */
.modal:target .content-modal { top: 5em; transition: top p.35s ease;}

@media (max-width: 600px) {
    .navbar { display: none;}
    .contenedor-modal { display: flex; color: #ffffff; margin-left: 5px; margin-right: 15px;}
    .btn { font-size: 16px; padding: 3px 6px; margin-left: auto; margin-right: 5px;}
    .btn1 { font-size: 16px; padding: 3px 6px; margin-left: auto; margin-right: 5px;}
    .footer { padding: 10px 0;}
    .footer p { display: none;}
    .main-component nav { height: 30px; width:100%; font-size: 16px; padding: 0; margin-top: -5px;}
}
@media (max-width: 370px) {
  .modal .content-modal { width: 90%; max-width: none; left: 5%; margin-left: 0;}
  .btn { font-size: 13px;}
  .btn1 { font-size: 13px;}
}
</style>

