<template>
    <div id="MakeReserva" class="make_reserva">

            <div v-if="busqueda" class="container_form">
                <form v-on:submit.prevent="processMakeReserva">
                    <h2> Opciones de reserva </h2>
                    <div class="username">
                        <label for="username"> Username </label>
                        <input type="text" id="username" placeholder="Your username" v-model="form.username" required>
                    </div>
                    <br>
                    <div class="destino">
                        <label for="destino"> Destino </label>
                        <select id="destino" v-model="form.destino" required>
                            <option selected disabled> Selecione un destino </option>
                            <option value="Cartagena"> Cartagena </option>
                            <option value="Barranquilla"> Barranquilla </option>
                            <option value="Santa Marta"> Santa Marta </option>
                        </select>
                    </div>
                    <br>
                    <div v-if="form.destino == 'Cartagena'" class="hotel_cartagena">
                        <label for="hotel_cartagena"> Hotel </label>
                        <select id="hotel_cartagena" v-model="form.hotel" required>
                            <option selected disabled> Selecione un hotel </option>
                            <option value="Puerta del Sol"> Puerta del Sol </option>
                            <option value="Aixo Suites"> Aixo Suites </option>
                            <option value="Boca Grande"> Boca Grande </option>
                        </select>
                    </div>
                    <div v-if="form.destino == 'Barranquilla'" class="hotel_barranquilla">
                        <label for="hotel_barranquilla"> Hotel </label>
                        <select id="hotel_barranquilla" v-model="form.hotel" required>
                            <option selected disabled> Selecione un hotel </option>
                            <option value="Bocas de Ceniza"> Bocas de Ceniza </option>
                            <option value="Metropolitano"> Metropolitano </option>
                            <option value="La Arenosa"> La Arenosa </option>
                        </select>
                    </div>
                    <div v-if="form.destino == 'Santa Marta'" class="hotel_santa_marta">
                        <label for="hotel_santa_marta"> Hotel </label>
                        <select id="hotel_santa_marta" v-model="form.hotel" required>
                            <option selected disabled> Selecione un hotel </option>
                            <option value="Cabañas Avenida 30"> Cabañas Avenida 30 </option>
                            <option value="El Pibe Valderrama"> El Pibe Valderrama </option>
                            <option value="Pescadito"> Pescadito </option>
                        </select>
                    </div>
                    <br>
                    <div class="tipo_de_habitacion">
                        <label for="tipo_de_habitacion"> Habitación </label>
                        <select id="tipo_de_habitacion" v-model="form.tipo_habitacion" required>
                            <option selected disabled> habitación </option>
                            <option value="King"> King </option>
                            <option value="Queen"> Queen </option>
                            <option value="Doble"> Doble </option>
                            <option value="Sencilla"> Sencilla </option>
                        </select>
                    </div>
                    <br>
                    <div class="valor">
                        <label for="valor"> Valor </label>
                        <select id="valor" v-model="form.valor" required>
                            <option v-if="form.tipo_habitacion == 'King'" value="600000"> $ 600.000 </option>
                            <option v-if="form.tipo_habitacion == 'Queen'" value="500000"> $ 500.000 </option>
                            <option v-if="form.tipo_habitacion == 'Doble'" value="400000"> $ 400.000 </option>
                            <option v-if="form.tipo_habitacion == 'Sencilla'" value="300000"> $ 300.000 </option>
                        </select>
                    </div>
                    <br>
                    <div class="fecha_in">
                        <label for="fecha_in" > Fecha ingreso </label>
                        <input type="date" id="fecha_in" v-model="form.fecha_in" required>
                    </div>
                    <br>
                    <div class="fecha_out">
                        <label for="fecha_out" > Fecha salida </label>
                        <input type="date" id="fecha_out" v-model="form.fecha_out" required>
                    </div>
                    <br>
                    <button type="submit"> Guardar </button>
                </form>
            </div>
            <div v-if="resultado" class="Result3">
                <ul>
                    <li> <h5> Id Reserva: <span> {{id_reserva}} </span> </h5> </li>
                    <li> <h5> Nombre: <span> {{nombre}} </span> </h5> </li>
                    <li> <h5> Fecha reserva: <span> {{fecha_reserva}} </span> </h5> </li>
                    <li> <h5> Destino: <span> {{destino}} </span> </h5> </li>
                    <li> <h5> Hotel: <span> {{hotel}} </span> </h5> </li>
                </ul>
            </div>
            <div v-if="resultado" class="Result4">
                <ul>
                    <li> <h5> Tipo de habitación: <span> {{habitacion}} </span> </h5> </li>
                    <li> <h5> Valor: <span> $ {{valor}} </span> </h5> </li>
                    <li> <h5> Fecha ingreso: <span> {{fecha_in}} </span> </h5> </li>
                    <li> <h5> Fecha salida: <span> {{fecha_out}} </span> </h5> </li>
                    <li> <h5> Estado: <span> {{estado}} </span> </h5> </li>
                    <h5> <span> Reserva Exitosa </span> </h5>
                </ul>
            </div>
            <div v-if="resultado" class="regresar">
                <button v-on:click="regresar"> Volver </button>
            </div>
        </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "HacerReserva",
        data: function() {
            return {
                id_reserva: "",
                nombre: "",
                fecha_reserva: "",
                destino: "",
                hotel: "",
                habitacion: "",
                valor: null,
                fecha_in: "",
                fecha_out: "",
                estado: "",
                barranquilla: false,
                cartagena: false,
                santa_marta: false,
                resultado: false,
                busqueda: true,
                form: {
                    username: "",
                    destino: "",
                    hotel: "",
                    tipo_habitacion: "",
                    valor: null,
                    fecha_in: "",
                    fecha_out: ""
                }
            }
        },
        methods: {
            processMakeReserva: function(){
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
                this.reserva_in = this.form
                let self = this
                // axios.put("http://127.0.0.1:8000/user/reserva/make/", this.reserva_in)
                axios.put("https://reserva-api-tosko.herokuapp.com/user/reserva/make/", this.reserva_in)
                .then((result) => {
                    self.id_reserva = result.data.id_reserva
                    self.nombre = result.data.nombre
                    self.fecha_reserva = result.data.fecha_reserva
                    self.destino = result.data.destino
                    self.hotel = result.data.hotel
                    self.habitacion = result.data.tipo_habitacion
                    self.valor = result.data.valor
                    self.fecha_in = result.data.fecha_in
                    self.fecha_out = result.data.fecha_out
                    self.estado = result.data.estado
                })
                .catch((error) => {
                    if (error.response.status == "422")
                        alert("ERROR 422: Formulario erroneo.");
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no existe.");
                })
            },
            regresar: function(){
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
                localStorage.removeItem()
            }
        }
    }
</script>

<style>
    .make_reserva_main{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .make_reserva{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .container_form{
        border: 3px solid #0A0A2B;
        border-radius: 10px;
        width: 30%;
        height: 85%;
    }
    .make_reserva h2{
        color: #0A0A2B;
        text-align: center;
    }
    .make_reserva form{
        text-align: center;
    }
    .make_reserva input{
        height: 30px;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #0A0A2B;
    }
    .make_reserva label{
        color: #0A0A2B;
    }
    .make_reserva select{
        height: 30px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid #0A0A2B;
    }
    .make_reserva form button{
        width: 50%;
        height: 40px;
        color: #fbfbfb;
        background: #0A0A2B;
        border: 2px solid #fbfbfb;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .make_reserva button{
        width: 100%;
        height: 40px;
        color: #fbfbfb;
        background: #0A0A2B;
        border: 2px solid #fbfbfb;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .make_reserva button:hover{
        color: #0A0A2B;
        background: #fbfbfb;
        border: 2px solid #0A0A2B;
    }
    .make_reserva h5{
        font-size: 20px;
        color: #0A0A2B;
        justify-content: center;
    }
    .make_reserva span{
        font-size: 30px;
        color: #0A0A2B;
        text-align: center;
    }
    .Result4{
        border: 3px solid #0A0A2B;
        background-color: #b7b7ff;
        border-radius: 10px;
        width: 30%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .Result3{
        border: 3px solid #0A0A2B;
        background-color: #b7b7ff;
        border-radius: 10px;
        width: 30%;
        height: 65%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
