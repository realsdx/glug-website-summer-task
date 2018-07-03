import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DisplayEvents from '@/components/DisplayEvents'
import Members from '@/components/Members'
import contactus from '@/components/contact-us'
import blog from '@/components/Blog'
import Eachblog from '@/components/Eachblog'
import PageNotFound from '@/components/PageNotFound'
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path:'/events',
      name:'DisplayEvents',
      component:DisplayEvents
    },
    {
      path:'/members',
      name:'Members',
      component:Members
    },
    {
      path:'/contact-us',
      name:'contact-us',
      component:contactus
    },
    { path:'/blog',
      name:'blog',
      component:blog

    },
    { path:'/blog/:id',
      name:'Eachblog',
      component:Eachblog

    },
    { path: "/*",
       name:'errorPage',
      component: PageNotFound }
  ],
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
})
