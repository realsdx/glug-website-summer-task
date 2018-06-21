import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DisplayEvents from '@/components/DisplayEvents'
import Members from '@/components/Members'


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
    }

  ]
})
