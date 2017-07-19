<template>
  <div id="app">
    <button @click="toggle">toggle</button>
    <transition name="fade" mode="out-in">
      <router-view v-show="showMe"></router-view>
    </transition>
    <Loading></Loading>
    
  </div>
</template>

<script>
  import Loading from './components/Loading'

  export default {
      name: 'app',
      data () {
        return {
          showMe: false // 是否展示当前页面
        }
      },
      components: {
        Loading
      },
      mounted () {
        //this.loadingtime(1500)
      },
      beforeUpdate () {
        
      },
      methods: {
        loadingtime (time) {
          // Action 通过 store.dispatch 方法触发
          // 设置当前状态为加载中
          this.$store.dispatch('setLoading', true)
          // 模拟请求等待
          setTimeout(() => {
            // 页面显示
            this.$store.dispatch('setLoading', false)
            this.showMe = !this.showMe
          }, time)
        },
        toggle () {
          this.loadingtime(800)
        }
      }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s; 
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
