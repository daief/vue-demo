// 引入依赖
import Vue from 'vue'
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
// 引入state模块
import states from './states'
import mutations from './mutations'
import actions from './actions'
/*
 * 第一种 state模块化
 * 适合大型项目以及状态多的项目写法
 * 注：模块化状态只是模块化state不分，其余getters，mutations，actions，是不分模块的，注意不要重命名
*/
// vuex 模块
// const index = {
//   state: states,
//   mutations: mutations,
//   actions: actions
// }
//
// const store = new Vuex.Store({
//   modules: {
//     index: index
//   }
// })
/*
 * 第二种 不分模块状态共享
 * 适合中小型项目以及状态少的项目写法
 */
const store = new Vuex.Store({
  state: states,
  mutations: mutations,
  actions: actions
})

export default store