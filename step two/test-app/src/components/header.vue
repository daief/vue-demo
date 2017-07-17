<template>
	<div class="head">
		<!-- 使用 router-link 组件来导航. -->
	    <!-- 通过传入 `to` 属性指定链接. -->
	    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		<router-link to='/'>
		    <img src='../assets/cnodejs.svg' title='cnodejs.svg'>
		</router-link>
		<button class="about-btn" @click="toggleModel">关于</button>
		<!-- Vue只有在插入，更新或者移除DOM元素时才会应用过渡效果 -->
		<transition name="fade">
			<div class="model" v-show="dialogVisible" @click.self="toggleModel">
				<div class="model-content">
					<span>
	                    <strong>作者: &nbsp;&nbsp;</strong>
	                </span>
	                <a href='https://shuirong.github.io/' target='_blank'>林水溶</a>
	                </span>
	                <br>
	                <span>
	                    <strong>源代码: &nbsp;&nbsp;</strong>
	                </span>
	                <a href='https://github.com/shuiRong/VueCnodeJS' target='_blank'>Github</a>
	                <span class='star'>&nbsp;&nbsp;Star Star</span>
	                <br>
	                <br>
	                <span>
	                    <strong>技术栈: </strong>
	                </span>
	                <ul>
	                    <li>Vue.js</li>
	                    <li>Vue-router</li>
	                    <li>Axios</li>
	                    <li><strong style="text-decoration:line-through">ElementUI</strong>未使用</li>
	                    <li>CnodeJS API</li>
	                </ul>
	                <button @click="toggleModel">确定</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'header',
			data () {
				return {
				  dialogVisible: false
			}
		},
	  	methods: {
	  		toggleModel: function() {
	  			this.dialogVisible = !this.dialogVisible;
	  		}
	  	}
	}
</script>

<style scoped>
	.head {
	    background: #324057;
	    height: 3.6rem;
	    width: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	}
	.head img {
	    width: 10rem;
	    height: 3.5rem;
	    margin-left: 10rem;
	}
	.head>button {
	    display: inline-block;
	    float: right;
	    line-height: 3.6rem;
	    margin-right: 10rem;
	    font-weight: bold;
	    font-size: 20px;
	    color: white;
	    letter-spacing: 2px;
	    padding-top: 0.2rem;
	    border: none;
	    background: none;
	    outline: none;
	    padding: 0px;
	}
	.about-btn:hover {
		cursor: pointer;
	}
	.model {
		position: fixed;
		background-color: rgba(0,0,0,0.3);
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
		z-index: 99999;
	}
	.model-content {
		background-color: rgb(255,255,255);
		border-radius: 5px;
		margin: 0 auto;
		margin-top: 15%;
		width: 40%;
		max-height: 50%;
		padding: 1rem;
		border: 2px solid lightblue;
		z-index: 100000;
	}
	/* 1. declare transition */
	.fade-move, .fade-enter-active, .fade-leave-active {
		transition: all 0.5s cubic-bezier(.55,0,.1,1);
	}
	/* 2. declare enter from and leave to state */
	.fade-enter, .fade-leave-to {
		opacity: 0;
		transform: scale(0.01);
	}
	/* 3. ensure leaving items are taken out of layout flow so that moving
	    animations can be calculated correctly. */
	.fade-leave-active {
		position: absolute;
	}
</style>
