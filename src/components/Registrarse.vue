<template>
  <div class="wrapper registro">

    <div class="logo"><img src="../assets/tosko/Logo Tosko.png" alt="Tosko"></div>
    <div class="close"><a v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content1">

      <div class="cabecero">
        <h2>{{ msg1 }}</h2>
        <p>Es rápido y fácil.</p>
      </div>

			<form class="form" v-on:submit.prevent="processRegistro">
				<fieldset>

					<div class="col">
						<label>NOMBRE <span class="tooltip">?</span></label>
						<input type="text" id="nombre" v-model="form.nombre" placeholder="nombre" required>

						<label>USUARIO <span class="tooltip">?</span></label>
						<input type="text" id="usuario" v-model="form.username" placeholder="username" required>

						<label>EMAIL <span class="tooltip">?</span></label>
						<input type="email">
					</div>

					<div class="col">
            <label>APELLIDO <span class="tooltip">?</span></label>
						<input type="text">

            <label>FECHA DE NACIMIENTO <span class="tooltip">?</span></label>
						<div class="fecha_nacimiento">
							<input type="text" class="small">
							<input type="text" class="small">
							<input type="text" class="small">
						</div>

            <label>CONTRASEÑA <span class="tooltip">?</span></label>
						<input type="password" v-model="form.password" placeholder="password" required>

					</div>

				</fieldset>
        <p>Al hacer clic en "Registrarte", aceptas nuestras <span class="resaltado">Condiciones</span>, la <span class="resaltado">Política de datos</span> y la <span class="resaltado">Política de cookies</span>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
				<input type="submit" value="Siguiente">

			</form>

		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Registrarse',
  data: function(){
      return {
          msg1: 'Registrarte',
          busqueda: true,
          resultado: false,
          usuario: "",
          name: "",
          contraseña: "",
          form: {
              username: "",
              nombre: "",
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
      processRegistro: function(){
          this.busqueda = !this.busqueda
          this.resultado = !this.resultado
          this.user_in_db = this.form
          let self = this
          // axios.put("http://127.0.0.1:8000/user/register/", this.user_in_db)
          axios.put("https://reserva-api-tosko.herokuapp.com/user/register/", this.user_in_db)
          .then((result) => {
              self.name = result.data.nombre
              self.usuario = result.data.username
          })
          .catch((error) => {
              if (error.response.status == "404")
                  alert("ERROR 404: Usuario no disponible.");
              if (error.response.status == "422")
                  alert("ERROR 422: Formulario erroneo.");
          })
      },
      regresar: function(){
          this.busqueda = !this.busqueda
          this.resultado = !this.resultado
      },
  }
}
</script>

<style>
.registro { justify-content:flex-start;}

.logo { width: 9em; height: 9em; background: #f1f1f1; border-radius: 50%;}
.logo img { width: 8em; padding: 45px 0;}

.close { display:flex; position: absolute; float: right; right: 20px; top: 100px}
.close .fa {color:#FF4AA1;}
.close .fa:hover {color:#D4A0EF;}

.cabecero p { display: flex; margin-bottom: 0px;}

.col { display: inline-block; width: 49%; margin-bottom: 10px; padding: 0 5px; vertical-align: top; text-align: left;}

  .form input[type="text"].small { display: inline-block; width: 29.6%; margin-right: 5px;}
  .form .fecha_nacimiento .small:last-child { margin-right: 0;}

@media (max-width: 480px){
  .logo { display: none;}
  .logo img { display: none;}
  .cabecero p { font-size: 16px;}
  .form input[type="text"].small {width: 29%;}
}
</style>
