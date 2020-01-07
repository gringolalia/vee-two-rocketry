import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Antelope from './views/Antelope.vue'
import Bovine from './views/Bovine.vue'
import Camel from './views/Camel.vue'
import Deer from './views/Deer.vue'
import Elephant from './views/Elephant.vue'
import Giraffe from './views/Giraffe.vue'
import Goat from './views/Goat.vue'
import Hippo from './views/Hippo.vue'
import Rhino from './views/Rhino.vue'
import Zebra from './views/Zebra.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/antelope',
      name: 'antelope',
      component: Antelope
    },
    {
      path: '/bovine',
      name: 'bovines',
      component: Bovine
    },
    {
      path: '/camel',
      name: 'camel',
      component: Camel
    },
    {
      path: '/deer',
      name: 'deer',
      component: Deer
    },
    {
      path: '/elephant',
      name: 'elephant',
      component: Elephant
    },
    {
      path: '/giraffe',
      name: 'giraffe',
      component: Giraffe
    },
    {
      path: '/goat',
      name: 'goat',
      component: Goat
    },
    {
      path: '/hippo',
      name: 'hippo',
      component: Hippo
    },
    {
      path: '/rhino',
      name: 'rhino',
      component: Rhino
    },
    {
      path: '/zebra',
      name: 'zebra',
      component: Zebra
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
