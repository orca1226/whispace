import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import context from '@/utils/context.json'

// import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
  gsap
} from 'gsap'
import {
  ScrollTrigger
} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false
Vue.prototype.$context = context
Vue.prototype.$gsap = gsap

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
