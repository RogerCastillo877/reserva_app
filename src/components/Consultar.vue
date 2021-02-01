<template>
  <div class="wrapper consultar">

    <div class="close"><a v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content1">

      <div class="cabecero">
        <h2>{{ msg }}</h2>
        <p>El estado de tu reserva en cualquier momento y lugar, de una manera rápida y fácil</p>
      </div>

			<form class="form" v-on:submit.prevent="processGetReserva">
				<fieldset>
					<div class="col">
						<label>NÚMERO DE RESERVA<span class="tooltip">?</span></label>
						<input type="text" id="reserva" v-model="id_reserva_in" placeholder="Reserve number" required>
					</div>
				</fieldset>

				<input type="submit" value="Consultar">

			</form>
      <div v-if="resultado" class="Result1">
            <ul>
              <li><h5>Id Reserva: <span>{{id_reserve}}</span></h5></li>
              <li><h5>Nombre: <span>{{name}}</span></h5></li>
              <li><h5>Fecha reserva: <span>{{date_reserve}}</span></h5></li>
              <li><h5>Acomodación: <span>{{room}} </span> </h5> </li>
              <li><h5>Valor: <span>{{cost}}</span></h5></li>
              <li><h5>Fecha ingreso: <span>{{date_in}}</span></h5> </li>
              <li><h5>Fecha salida: <span>{{date_out}}</span></h5> </li>
              <li><h5>Estado: <span> {{status}}</span></h5></li>
            </ul>
        </div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Consultar',
  data: function(){
    return {
      msg: 'Consulta',
      id_reserve: "",
      name: "",
      date_reserve: "",
      room: "",
      cost: null,
      date_in: "",
      date_out: "",
      status: "",
      resultado: false,
      busqueda: true
    }
  },
  methods: {
    inicial: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
      }
    },
    processGetReserva: function(){
        this.busqueda = !this.busqueda
        this.resultado = !this.resultado
        this.id_reserva = this.id_reserva_in
        let self = this
        axios.get("http://127.0.0.1:8000/user/reserva/" + this.id_reserva)
        //axios.get("https://reserva-api-tosko.herokuapp.com/user/reserva/" + this.id_reserva)
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
          if (error.response.status == "404")
            alert("ERROR 404: Reserva no encontrada.");
          if (error.response.status == "422")
            alert("ERROR 422: Ingrese un número de reserva.");
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
