<template>
  <div class="wrapper reservar">

    <div class="close"><a v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content1">

      <div class="cabecero">
        <h2>{{ msg }}</h2>
        <p>Evita filas, demoras y asegura un lugar confortable para descansar</p>
      </div>

			<form class="form" v-on:submit.prevent="processMakeReserva">
				<fieldset>
					<div class="col">
						<label for="username">USUARIO<span class="tooltip">?</span></label>
						<input type="text" id="username" placeholder="Username" v-model="form.username" required>

						<label for="acomodation">ACOMODACIÓN<span class="tooltip">?</span></label>
						<select id="tipo_de_habitacion" v-model="form.tipo_habitacion" required>
              <option selected disabled> habitación </option>
              <option value="Cuadruple">Cuádruple</option>
              <option value="Triple">Triple</option>
              <option value="Doble">Doble</option>
              <option value="Sencilla">Sencilla</option>
            </select>

						<label for="valor">Valor<span class="tooltip">?</span></label>
						<select id="valor" v-model="form.valor" required>
              <option v-if="form.tipo_habitacion == 'Cuadruple'" value="270000"> $ 270.000 </option>
              <option v-if="form.tipo_habitacion == 'Triple'" value="250000"> $ 250.000 </option>
              <option v-if="form.tipo_habitacion == 'Doble'" value="220000"> $ 220.000 </option>
              <option v-if="form.tipo_habitacion == 'Sencilla'" value="180000"> $ 180.000 </option>
            </select>
					</div>

					<div class="col">
            <label for="fecha_in">FECHA DE INGRESO<span class="tooltip">?</span></label>
						<input type="date" id="fecha_in" v-model="form.fecha_in" required>

            <label for="fecha_out">FECHA DE SALIDA<span class="tooltip">?</span></label>
						<input type="date" id="fecha_out" v-model="form.fecha_out" required>
					</div>
				</fieldset>

        <p>Al hacer clic en "Continuar", aceptas nuestros <span class="resaltado">Términos</span>, las <span class="resaltado">Condiciones</span> y la acepta conocer nuestra <span class="resaltado">Política de cancelación</span>.</p>
				<input type="submit" value="Continuar">

      </form>
      <div v-if="resultado" class="Result3">
        <ul>
          <li><h5>Id Reserva: <span>{{id_reserve}}</span></h5></li>
          <li><h5>Nombre: <span>{{name}}</span></h5></li>
          <li><h5>Fecha reserva: <span>{{date_reserve}}</span></h5></li>
          <li><h5>Acomodación: <span>{{room}} </span> </h5> </li>
          <li><h5>Valor: <span>{{cost}}</span></h5></li>
          <li><h5>Fecha ingreso: <span>{{date_in}}</span></h5> </li>
          <li><h5>Fecha salida: <span>{{date_out}}</span></h5> </li>
          <li><h5>Estado: <span> {{status}}</span></h5></li>
          <h5><span>Reserva Exitosa</span></h5>
        </ul>
      </div>

		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Reservar",
    data: function() {
      return {
        msg: 'Al registrarte',
        id_reserve: "",
        name: "",
        date_reserve: "",
        room: "",
        cost: null,
        date_in: "",
        date_out: "",
        status: "",
        resultado: false,
        busqueda: true,
        form: {
            username: "",
            tipo_habitacion: "",
            cost: null,
            datein: "",
            date_out: ""
        }
      }
    },
    methods: {
      inicial: function(){
        if(this.$route.name != "inicio"){
          this.$router.push({name: "inicio"})
        }
      },
      processMakeReserva: function(){
          this.busqueda = !this.busqueda
          this.resultado = !this.resultado
          this.reserva_in = this.form
          let self = this
          // axios.put("http://127.0.0.1:8000/user/reserva/make/", this.reserva_in)
          axios.put("https://reserva-api-tosko.herokuapp.com/user/reserva/make/", this.reserva_in)
          .then((result) => {
              self.id_reserve = result.data.id_reserva
              self.name = result.data.nombre
              self.date_reserve = result.data.fecha_reserva
              self.room = result.data.tipo_habitacion
              self.cost = result.data.valor
              self.date_in = result.data.fecha_in
              self.date_out = result.data.fecha_out
              self.status = result.data.estado
          })
          .catch((error) => {
              if (error.response.status == "422")
                  alert("ERROR 422: Formulario erroneo.");
              if (error.response.status == "404")
                  alert("ERROR 404: Usuario no existe.");
          })
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
  .form input:hover[type="submit"] {background: #9EDB88;}

hr { margin: -15px 0 20px 0;}
  .form input[type="submit1"] { background: #FF4AA1; color: #fff; text-align: center; border:0; padding: 10px 20px; font-size: 18px; border-radius: 5px;}
  .form input:hover[type="submit1"] {background: #9EDB88;}

@media (max-width: 370px){
  .content1 { width: 350px}
  .form label { font-size: 13px;}
  .form input[type="text"].small { width: 28.5%;}
}
</style>
