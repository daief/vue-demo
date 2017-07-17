import Vue from 'vue'
import Router from 'vue-router'

import MainSec from '@/components/main'
import ArticleContent from '@/components/articleContent'
import SideSec from '@/components/sideSec';
import UserCom from '@/components/userCom'

Vue.use(Router)

export default new Router({
  routes: [{
	        path: '/',
	        name: 'RootPath',
	        components: {
            	main: MainSec,
        	}
        }, {
	        path: '/topic/:id',
	        name: 'ArticleRoute',
	        components: {
        	    main: ArticleContent,
        	    side: SideSec
        	}
    	}, {
	        path: '/user/:name',
	        name: 'UserRoute',
	        components: {
	            main: UserCom
	        }
	    }, {
	        path: '/user/:name',
	        redirect: '/user:name',
	    }]
})
