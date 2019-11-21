import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Pokemon from './components/Pokemon'
import {store} from './state'

Vue.config.productionTip = false
const routes = [
  {path: '/', component: Pokemon},
  {path: '/:selectedPokemon', component: Pokemon} 
];
const router = new VueRouter({routes})
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
