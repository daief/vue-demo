<!-- 要把 vue-router 添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉 vue-router 在哪里渲染它们 -->
<template>
    <div id="app">
        <header-vue></header-vue>
        <!-- router-view 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <!-- 命名视图 name, 默认为default -->
        <router-view name='main'></router-view>
        <!-- 使用 ref 为子组件指定一个索引 ID，parent.$refs.child可访问该子组件 -->
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
        // 键是需要观察的表达式，Vue 实例将会在实例化时调用 $watch()，遍历 watch 对象的每一个属性
        // authorName变化时调用
        watch: {
            authorName(val) {
                // 一个对象，其中包含了所有拥有 ref 注册的子组件
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
