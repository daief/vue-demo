<!-- 用全局状态驱动的loading组件例子，旨在掌握vuex的基本用法 -->
<template>
	<div class="spinner" v-show="isLoading">
  	</div>
</template>

<script>
	export default {
		name: 'Loading',
		data () {
	      	return {
	        	msg: 'Hello Vue!'
	      	}
	    },
	    computed: {
	    	isLoading () {
	    		// store 实例中读取状态最简单的方法就是在计算属性中返回某个状态,这种模式导致组件依赖的全局状态单例
	    		// return store.state.count
	    		 
	    		// 将状态从根组件『注入』到每一个子组件中main.js中调用 Vue.use(Vuex)
	    		// 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
	    		// 子组件能通过 this.$store 访问到
	    		// computed计算属性，取值为store 内的全局状态，isLoading为布尔值
	    		return this.$store.state.isLoading


	    		// ps:mapState 辅助函数帮助我们生成计算属性
	    	}
	    }
	}
</script>

<style scoped>
	.spinner {
	  position: fixed;
	  top: 0;
	  left: 50%;

	  width: 60px;
	  height: 60px;
	  background-color: #67CF22;
	 
	  margin: 100px auto;
	  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
	  animation: rotateplane 1.2s infinite ease-in-out;
	}
	 
	@-webkit-keyframes rotateplane {
	  0% { -webkit-transform: perspective(120px) }
	  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
	  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
	}
	 
	@keyframes rotateplane {
	  0% {
	    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)
	  } 50% {
	    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)
	  } 100% {
	    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	  }
	}
</style>