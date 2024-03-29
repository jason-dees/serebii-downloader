import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Pokemon from './components/Pokemon'

Vue.config.productionTip = false
const routes = [
  {path: '/', component: Pokemon},
  {path: '/:gen/:selectedPokemon', component: Pokemon, props: true }
];
const router = new VueRouter({routes})
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
