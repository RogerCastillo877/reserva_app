<template>
    <div id="GetReserva" class="get_reserva">
        <div v-if="busqueda" class="container_form1">
            <form v-on:submit.prevent="processGetReserva" >
                <h3> Ingrese el número de reserva </h3>
                <input type="text" id="reserva" v-model="id_reserva_in" placeholder="número reserva" required>
                <button type="submit"> Consultar reserva </button>
            </form>
        </div>
        <div v-if="resultado" class="Result1">
            <ul>
                <li> <h5> Id Reserva: <span> {{id_reserva}} </span> </h5> </li>
                <li> <h5> Nombre: <span> {{nombre}} </span> </h5> </li>
                <li> <h5> Fecha reserva: <span> {{fecha_reserva}} </span> </h5> </li>
                <li> <h5> Destino: <span> {{destino}} </span> </h5> </li>
                <li> <h5> Hotel: <span> {{hotel}} </span> </h5> </li>
            </ul>
        </div>
        <div v-if="resultado" class="Result2">
            <ul>
                <li> <h5> Tipo de habitación: <span> {{habitacion}} </span> </h5> </li>
                <li> <h5> Valor: <span> $ {{valor}} </span> </h5> </li>
                <li> <h5> Fecha ingreso: <span> {{fecha_in}} </span> </h5> </li>
                <li> <h5> Fecha salida: <span> {{fecha_out}} </span> </h5> </li>
                <li> <h5> Estado: <span> {{estado}} </span> </h5> </li>
            </ul>
        </div>
        <div v-if="resultado" class="regresar">
            <button v-on:click="regresar"> Volver </button>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "ConsultarReserva",
        data: function(){
            return {
                id_reserva_in: "",
                id_reserva: "",
                nombre: "",
                fecha_reserva: "",
                destino: "",
                hotel: "",
                habitacion: "",
                valor: 0,
                fecha_in: "",
                fecha_out: "",
                estado: "",
                resultado: false,
                busqueda: true
            }
        },
        methods: {
            processGetReserva: function(){
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
                this.id_reserva = this.id_reserva_in
                let self = this
                // axios.get("http://127.0.0.1:8000/user/reserva/" + this.id_reserva)
                axios.get("https://reserva-api-tosko.herokuapp.com/user/reserva/" + this.id_reserva)
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
                    if (error.response.status == "404")
                        alert("ERROR 404: Reserva no encontrada.");
                    if (error.response.status == "422")
                        alert("ERROR 422: Ingrese un número de reserva.");
                })
            },
            regresar: function(){
                this.busqueda = !this.busqueda
                this.resultado = !this.resultado
            }
        },

    }
</script>

<style>
    .get_reserva{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .container_form1 {
        border: 3px solid #0A0A2B;
        border-radius: 10px;
        width: 30%;
        height: 35%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .get_reserva h3{
        color: #0A0A2B;
        text-align: center;
    }
    .get_reserva form{
        width: 85%;
    }
    .get_reserva input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #0A0A2B;
    }
    .get_reserva button{
        width: 100%;
        height: 40px;
        color: #fbfbfb;
        background: #0A0A2B;
        border: 2px solid #fbfbfb;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .get_reserva button:hover{
        color: #0A0A2B;
        background: #fbfbfb;
        border: 2px solid #0A0A2B;
    }
    .Result1{
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
    .Result2{
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
    .get_reserva h5{
        font-size: 20px;
        color: #0A0A2B;
        justify-content: center;
    }
    .get_reserva span{
        font-size: 30px;
        color: #0A0A2B;
        text-align: center;
    }
</style>
