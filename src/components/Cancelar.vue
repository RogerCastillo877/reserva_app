<template>
  <div class="wrapper cancelar">

    <div class="close"><a v-on:click="inicial"><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content1">

      <div class="cabecero">
        <h2>{{ msg }}</h2>
        <p>¿Ya lo pensaste bien?, en todo caso dejanos saber el motivo de tu decisión y recuerda que te estamos esperando siempre.</p>
      </div>

			<form class="form" v-on:submit.prevent="processCancelReserva">
				<fieldset>
					<div class="col">
						<label>NÚMERO DE RESERVA<span class="tooltip">?</span></label>
						<input type="text" id="reserva" v-model="form.id_reserva" placeholder="Reserve number" required>
					</div>
				</fieldset>

				<input type="submit" value="Cancelar reserva">

			</form>
      <div v-if="resultado" class="Result1">
            <ul>
              <li><h5>Id Reserva: <span>{{id_reserve}}</span></h5></li>
              <li><h5>Estado: <span> {{status}}</span></h5></li>
            </ul>
        </div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Cancelar',
  data: function(){
    return {
      msg: 'Cancelar reserva',
        id_reserve: "",
        status: "",
        resultado: false,
        busqueda: true,
        form: {
          id_reserva: ""
        }
    }
  },
  methods: {
    inicial: function(){
      if(this.$route.name != "inicio"){
        this.$router.push({name: "inicio"})
      }
    },
    processCancelReserva: function() {
      this.busqueda = !this.busqueda
      this.resultado = !this.resultado
      this.reserva_cancel_in = this.form
      let self = this
      axios.put("http://127.0.0.1:8000/user/reserva/cancel/", this.reserva_cancel_in)
      // axios.put("https://reserva-api-tosko.herokuapp.com/user/reserva/cancel/", this.reserva_cancel_in)
      .then((result) => {
        self.id_reserve = result.data.id_reserva
        self.status = result.data.estado
      })
      .catch((error) => {
        if (error.response.status == "404")
            alert("ERROR 404: Reserva ya cancelada.");
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
