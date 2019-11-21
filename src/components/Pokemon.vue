<template>
  <div>
    <h1>{{ state.msg }}</h1>
    <img v-bind:src="iconSrc" />
    <img v-bind:src="normalSrc" />
    <img v-bind:src="shinySrc" />
    <button v-on:click="newPokemon">new pokemon</button>
  </div>
</template>

<script>
import {store} from '../state'
export default {
  name: 'Pokemon',
  props:['selectedPokemon'],
  data: function(){
    let selectedPokemon = this.$route.params.selectedPokemon;
    return {
      pokemonNumber: selectedPokemon,
      state: store.state
    }
  },
  computed:{
      iconSrc: function(){
        return `${this.state.iconRoute}${this.zeroOutNumber(this.state.activePokemon)}.png`;
      },
      normalSrc: function(){
        return `${this.state.normalRoute}${this.zeroOutNumber(this.state.activePokemon)}.png`;
      },
      shinySrc: function(){
        return `${this.state.normalRoute}${this.zeroOutNumber(this.state.activePokemon)}.png`;
      }
  },
  mounted:function(){
    if(this.$route.params.selectedPokemon  == undefined || 
        this.$route.params.selectedPokemon * 1 > this.state.lastPokemon){
      this.newPokemon();
    }
    else{
     store.setActivePokemon(this.$route.params.selectedPokemon);
    }
  },
  methods: {
   newPokemon: function(){
     let number = Math.floor(Math.random() * (this.state.lastPokemon+1));
     this.$router.push({ path: `/${number}` }) 
   }, 
   zeroOutNumber: function(number){
     return ("000" + number).slice(-3);
   }
  },
  watch:{
    $route(to){
      console.log("change");
      if(to.params.selectedPokemon * 1 > this.state.lastPokemon){
        this.newPokemon();
      }
      else{
        store.setActivePokemon(to.params.selectedPokemon);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
