<template>
    <div id="Registrarse" class="registrarse">
        <div v-if="busqueda" class="container_form5">
            <form v-on:submit.prevent="processRegistro">
                <h3> Registrarse </h3>
                <input type="text" id="nombre" v-model="form.nombre" placeholder="nombre" required>
                <input type="text" id="usuario" v-model="form.username" placeholder="username" required>
                <input type="password" id="contraseña" v-model="form.password" placeholder="password" required>
                <button type="submit"> Guardar </button>
            </form>
        </div>
        <div v-if="resultado" class="Result6">
            <ul>
                <li> <h5> Nombre: <span> {{name}} </span> </h5> </li>
                <li> <h5> Usuario: <span> {{usuario}} </span> </h5> </li>
                <h5> <span> Registro Exitoso </span> </h5>
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
        name: "Registrarse",
        data: function(){
            return {
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
            }
        }
    }
</script>

<style>
    .registrarse{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .container_form5{
        border: 3px solid #0A0A2B;
        border-radius: 10px;
        width: 20%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .registrarse h3{
        color: #0A0A2B;
        text-align: center;
    }
    .registrarse form{
        width: 85%;
    }
    .registrarse input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #0A0A2B;
    }
    .registrarse button{
        width: 100%;
        height: 40px;
        color: #fbfbfb;
        background: #0A0A2B;
        border: 2px solid #fbfbfb;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .registrarse button:hover{
        color:#0A0A2B;
        background: #fbfbfb;
        border: 2px solid #0A0A2B;
    }
    .registrarse h5{
        font-size: 20px;
        color: #0A0A2B;
        justify-content: center;
    }
    .Result6{
        border: 3px solid #0A0A2B;
        background-color: #b7b7ff;
        border-radius: 10px;
        width: 20%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
