import Vue from 'vue'
import Router from 'vue-router'

import MainSec from '@/components/main'
import ArticleContent from '@/components/articleContent'
import SideSec from '@/components/sideSec';
import UserCom from '@/components/userCom'

// 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)
Vue.use(Router)

// 谁先定义的，谁的优先级就最高
export default new Router({
	// 定义路由
  	routes: [{
	        path: '/',
	        // 命名路由
	        name: 'RootPath',
	        // 每个路由应该映射组件
	        components: {		
            	main: MainSec,
        	}
        }, {
        	// 链接到一个命名路由，可以给 router-link 的 to 属性传一个对象
        	// <router-link :to="{ name: 'ArticleRoute', params: { id: 123 }}">User</router-link>
	        path: '/topic/:id',
	        name: 'ArticleRoute',
	        components: {
        	    main: ArticleContent,
        	    side: SideSec
        	}
    	}, {
    		// 动态路径参数 以冒号开头，像 /user/foo 和 /user/bar 都将映射到相同的路由
    		// 当匹配到一个路由时，参数值会被设置到 this.$route.params
    		// 此处 this.$route.name 可输出foo或bar
    		// https://router.vuejs.org/zh-cn/api/route-object.html
    		// 从 /user/foo 导航到 user/bar，原来的组件实例会被复用，组件的生命周期钩子不会再被调用，
    		// 想对路由参数的变化作出响应的话，你可以简单地 watch（监测变化） $route 对象
	        path: '/user/:name',
	        name: 'UserRoute',
	        components: {
	            main: UserCom
	        }
	    }, {
	    	// 重定向也是通过 routes 配置来完成，下面例子是从 /user/:name 重定向到 /user:name
	        path: '/user/:name',
	        redirect: '/user:name'
	    }]
})
