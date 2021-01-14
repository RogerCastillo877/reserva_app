<template>
    <div id="inicio">
        <div>
            <h1> {{mensaje}} </h1>
        </div>
    </div>
</template>

<script>
export default {
    name: "Inicio",
    data: function() {
        return{
          mensaje: "Bienvenidos a TOSKO la página de gestión de su reserva"
        }
    },
}
</script>

<style>
    #inicio{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #inicio h1{
        font-size: 50px;
        color: #0A0A2B;
        text-align: center;
    }
</style>
