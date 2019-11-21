<template>
  <div id="app">
    <router-view>thing here</router-view>
  </div>
</template>

<script>
import Pokemon from './components/Pokemon.vue'
export default {
  name: 'app',
  data: function(){
    return {
    }
  },
  mounted: function(){
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
