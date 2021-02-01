import vueRouter from 'vue-router'

import Inicio from './components/Inicio'
import Consultar from './components/Consultar.vue'
import Reservar from './components/Reservar.vue'
import Cancelar from './components/Cancelar.vue'
import Login from './components/Login'
import Registrarse from './components/Registrarse'
import Acomodacion from './components/Acomodacion.vue'
import Comunidad from './components/Comunidad.vue'
import App from './App'

const router = new vueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: "principal",
      component: App
    },
    {
      path: '/inicio/',
      name: "inicio",
      component: Inicio
    },
    {
        path: '/user/reserva/consultar/',
        name: "consultar_reserva",
        component: Consultar
    },
    {
        path: '/user/reserva/reservar/',
        name: "hacer_reserva",
        component: Reservar
    },
    {
        path: '/user/reserva/cancelar/',
        name: "cancelar_reserva",
        component: Cancelar
    },
    {
      path: '/user/login/',
      name: "login_usuario",
      component: Login
    },
    {
      path: '/user/registro/',
      name: "registro_user",
      component: Registrarse
    },
    {
      path: '/comunidad/',
      name: "comunidad",
      component: Comunidad
    },
    {
      path: '/acomodacion/',
      name: "acomodacion",
      component: Acomodacion
    }
  ]
})

export default router
