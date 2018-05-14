import Vue from 'vue'
import Router from 'vue-router'
import daughter from '@/components/daughter'
import Wife from '@/components/Wife'
import me from '@/components/me'
import HelloWorld from '@/components/HelloWorld'
import Family from '@/components/Family'
import welove from '@/components/welove'
import Future from '@/components/Future'
import FaDetailsPage from '@/components/FaDetailsPage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/HelloWorld/daughter'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          name: 'daughter',
          path: 'daughter',
          component: daughter
        },
        {
          name: 'Wife',
          path: 'Wife',
          component: Wife
        },
        {
          name: 'me',
          path: 'me',
          component: me
        },
        {
          name: 'Family',
          path: 'Family',
          component: Family,
        },
        {
          name: 'FaDetailsPage',
          path: '/Family/FaDetailsPage/:id?',
          component: FaDetailsPage
        },
        {
          name: 'welove',
          path: 'welove',
          component: welove
        },
        {
          name: 'Future',
          path: 'Future',
          component: Future
        }
      ]
    }
  ]
})
