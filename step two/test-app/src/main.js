// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */

new Vue({
  el: '#app',
  // 要通过 router 配置参数注入路由，从而让整个应用都有路由功能
  router,
  template: '<App/>',
  components: { App }
})
