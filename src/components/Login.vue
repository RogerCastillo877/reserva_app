<template>
    <div id="Login" class="login">
        <div class="container_form4">
            <form v-on:submit.prevent="processLogin" >
                <h3> Autenticarse </h3>
                <input type="text" id="usuario" v-model="form.username" placeholder="username" required>
                <input type="password" id="contraseña" v-model="form.password" placeholder="password" required>
                <button type="submit"> Iniciar sesión </button>
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
                form: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            processLogin: function(){
                var self = this
                // axios.post("http://127.0.0.1:8000/user/login/", self.form)
                axios.post("https://reserva-api-tosko.herokuapp.com/user/login/", self.form)
                .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in');
                })
                .catch((error) => {
                    if (error.response.status == "404")
                        alert("ERROR 404: Usuario no encontrado.");
                    if (error.response.status == "403")
                        alert("ERROR 403: Contraseña Erronea.");
                });
            }
        }
    }
</script>

<style>
    .login{
        margin: 0;
        padding: 0%;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .container_form4{
        border: 3px solid #0A0A2B;
        border-radius: 10px;
        width: 20%;
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .login h3{
        color: #0A0A2B;
        text-align: center;
    }
    .login form{
        width: 85%;
    }
    .login input{
        height: 40px;
        width: 100%;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px 0;
        border: 1px solid #0A0A2B;
    }
    .login button{
        width: 100%;
        height: 40px;
        color: #fbfbfb;
        background: #0A0A2B;
        border: 2px solid #fbfbfb;
        border-radius: 5px;
        padding: 10px 25px;
        margin: 5px 0;
    }
    .login button:hover{
        color: #0A0A2B;
        background: #fbfbfb;
        border: 2px solid #0A0A2B;
    }
</style>
