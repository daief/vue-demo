<template>
  <div id="app">
    <button @click="toggle">toggle</button>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
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
            this.$store.dispatch('setLoading', false)

            if (this.$route.name == 'Hello2') {
              // 链接到一个命名路由
              this.$router.push({ name: 'Hello' })
            }
            else {
              this.$router.push({ name: 'Hello2' })
            }
            
          }, time)
        },
        toggle () {
          this.loadingtime(1000)
        }
      }
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: all .8s; 
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: scale(0.1) translate(150px,150px);
  }
</style>
