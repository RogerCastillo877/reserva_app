// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'    // Nueva

import router from './router'         // Nueva
Vue.use(vueRouter)                    // Nueva

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,                             // Nueva
  el: '#app',
  components: { App },
  template: '<App/>'
})
