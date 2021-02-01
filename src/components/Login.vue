<template>
  <div class="wrapper login">

    <div class="close"><a v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content1">

      <div class="cabecero">
        <h2>{{ msg }}</h2>
        <p>Te ayuda a reservar en la mejor opción del mercado y compartir tu experiencia con las personas que forman parte de tu vida</p>
      </div>

			<form class="form" v-on:submit.prevent="processLogin">
				<fieldset>
					<div class="col">
						<label>USUARIO <span class="tooltip">?</span></label>
						<input type="text" id="usuario" v-model="form.username" placeholder="username" required>

						<label>CONTRASEÑA <span class="tooltip">?</span></label>
						<input type="password" id="contraseña" v-model="form.password" placeholder="password" required>
					</div>
				</fieldset>

				<input type="submit" value="Iniciar sesión">
        <p>¿Olvidaste tu contraseña?</p>
        <hr>
        <a class="btn2" v-on:click="registrar">Crear cuenta nueva</a>

			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  data: function(){
    return {
      msg: 'Ingresa',
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    inicial: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
      }
    },
    processLogin: function(){
      var self = this
      // axios.post("http://127.0.0.1:8000/user/login/", self.form)
      axios.post("https://reserva-api-tosko.herokuapp.com/user/login/", self.form)
      .then((_result) => {
        alert("Autenticación Exitosa");
        self.$emit('log-in');
      })
    .catch((error) => {
      if (error.response.status == "404")
        alert("ERROR 404: Usuario no encontrado.");
      if (error.response.status == "403")
        alert("ERROR 403: Contraseña Erronea.");
    });
    },
    registrar: function(){
      if(this.$route.name != "registro_user"){
        this.$router.push({name: "registro_user"})
      }
    }
  }
}
</script>

<style>
.wrapper { display: flex; flex-flow:column; align-items:center; justify-content:center; width: 100%; min-height: 100%; background: rgba(255, 255, 255, 0.75);}
.login { justify-content:flex-start;}

.close { display:flex; position: absolute; float: right; right: 20px; top: 100px}
.close .fa {color:#FF4AA1;}
.close .fa:hover {color:#D4A0EF;}

.content1 { display: flex; flex-flow:column; width: 430px; padding-bottom: 100px; align-items:center; text-align: center; background-color: #ffffff;}
.cabecero { display: block; margin-left: 20px; margin-right: auto; padding-bottom: 30px; color: rgb(70,70,70);}
.cabecero h2 { font: 50px 'Oswald'; font-weight: 600;}
.cabecero p { width: 96%;float: left}

.form { width: 96%; margin:0 auto; padding-bottom: 30px; text-align: center;}
.col { display: inline-block; width: 90%; margin-bottom: 10px; padding: 0 5px; vertical-align: top; text-align: left;}

.form label { display: block; margin-bottom: 5px; color: rgb(70,70,70); font-size: 16px; text-transform: uppercase;}
  .form .tooltip { display: inline-block; background: rgb(70,70,70); color: #ffffff; border-radius: 50%; height: 16px; width: 16px; text-align: center; line-height: 18px; vertical-align: middle; margin-bottom: 3px;}
  .form input[type="text"], .form input[type="password"], form select { display: block; width: 100%; background: #f1f1f1; border: 0; padding: 5px; height: 35px; margin-bottom: 15px;}

  .form p { display: inline-block;font-size: 14px; width: 90%; color: rgb(70,70,70); margin-bottom: 30px;}
  .form .resaltado { color:#6CF0E9;}

  .form input[type="submit"] { background: #6CF0E9; color: #fff; text-align: center; border:0; padding: 10px 20px; font-size: 18px; border-radius: 5px;}
  .form input:hover[type="submit"] {background: #9EDB88; cursor: pointer;}

hr { margin: -15px 0 20px 0;}
  .btn2 { background: #FF4AA1; color: #fff; text-align: center; border:0; padding: 10px 20px; font-size: 18px; border-radius: 5px;}
  .btn2:hover {background: #9EDB88; cursor: pointer;}

@media (max-width: 370px){
  .content1 { width: 350px}
  .form label { font-size: 13px;}
  .form input[type="text"].small { width: 28.5%;}
  .cabecero p { font-size: 16px;}
}
</style>
