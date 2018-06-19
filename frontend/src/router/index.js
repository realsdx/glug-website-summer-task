import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DisplayEvents from '@/components/DisplayEvents'


Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld
    },
    {
      path:'/Events',
      name:'DisplayEvents',
      component:DisplayEvents
    },

  ]
})
