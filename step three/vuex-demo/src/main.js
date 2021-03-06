// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入vuex创建的store实例，路径 './stores' 为 './stores/index.js'的简写
import store from './stores'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // store: store的简写
  template: '<App/>',
  components: { App }
})
