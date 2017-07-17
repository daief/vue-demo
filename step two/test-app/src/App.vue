<template>
    <div id="app">
        <header-vue></header-vue>
        <router-view name='main'></router-view>
        <router-view name='side' ref='child'></router-view>
    </div>
</template>

<script>
    import headerVue from './components/header'

    export default {
        name: 'app',
        data() {
            return {
                authorName: ''
            }
        },
        components: {
            headerVue
        },
        watch: {
            authorName(val) {
                this.$refs.child.name = val;
            }
        }
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
