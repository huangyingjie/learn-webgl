// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'basscss/css/basscss.css'
import '@/util/cuon-utils'
import '@/util/webgl-debug'
import '@/util/webgl-utils'
import '@/util/cuon-matrix'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
