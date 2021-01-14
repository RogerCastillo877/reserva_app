<template>
  <div id="app">
    <div class="header">
        <nav>
          <button v-on:click="principal"> Inicio </button>
          <button v-on:click="logIn2" v-if="not_is_auth"> Login </button>
          <button v-on:click="registrar_usuario" v-if="not_is_auth"> Registrarse </button>
          <button v-on:click="get_reserva" v-if="is_auth"> Consultar reserva </button>
          <button v-on:click="make_reserva" v-if="is_auth"> Hacer reserva </button>
          <button v-on:click="cancel_reserva" v-if="is_auth"> Cancelar reserva </button>
          <button v-on:click="logOut" v-if="is_auth"> Cerrar sesión </button>
        </nav>
        <h1> RESERVAS TOSKO APP </h1>
    </div>
    <div class="main-component">
      <router-view v-on:log-in="logIn"></router-view>
    </div>
    <div class="footer">
      <h2>Derechos reservados</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: function(){
    return {
      is_auth: false,
      not_is_auth: true,
      username: "",
      password: ""
    }
  },
  methods: {
    principal: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
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
    localStorage.setItem('default_reserva', '3')
    localStorage.setItem('isAuth', true)
    this.$router.push({name: "inicio"})
  }
}
</script>

<style>
body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    min-height: 6em;
    background-color: #0A0A2B;
    color:#fbfbfb;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .header h1{
    width: 35%;
    text-align: center;
    font-size: 1em;
  }

  .header nav {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.5em;
  }

  .header nav button{
    color: #fbfbfb;
    background: #0A0A2B;
    border: 1px solid #fbfbfb;
    border-radius: 5px;
    padding: 5px 10px;
  }

  .header nav button:hover{
    color: #0A0A2B;
    background: #b7b7ff;
    border: 1px solid #fbfbfb;
  }

  .main-component{
    min-height: 74vh;
    margin: 0%;
    padding: 0%;
    background:#fbfbfb;
  }

  .footer{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 10%;
    border-bottom: 0;
    background-color: #0A0A2B;
    color: #fbfbfb;
  }

  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1em;
  }
</style>
