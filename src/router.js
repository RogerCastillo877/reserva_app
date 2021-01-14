import vueRouter from 'vue-router'

import Inicio from './components/Inicio'
import ConsultarReserva from './components/ConsultarReserva'
import HacerReserva from './components/HacerReserva'
import CancelarReserva from './components/CancelarReserva'
import Login from './components/Login'
import Registrarse from './components/Registrarse'
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
        component: ConsultarReserva
    },
    {
        path: '/user/reserva/make/',
        name: "hacer_reserva",
        component: HacerReserva
    },
    {
        path: '/user/reserva/cancel/',
        name: "cancelar_reserva",
        component: CancelarReserva
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
    }
  ]
})

export default router
