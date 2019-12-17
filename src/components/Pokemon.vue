<template>
  <div>
    <h1 v-html="state.msg"></h1>
    <img v-if="iconSrc != ''" v-bind:src="iconSrc" />
    <img v-bind:src="normalSrc" />
    <img v-bind:src="shinySrc" />
    <br>
    <button v-on:click="newPokemon">new pokemon</button>
    <select v-on:change="newGeneration" :value="gen">
      <option v-for="generation in state.generations" :key="generation.gen" :value="generation.gen">
        {{generation.name}}
      </option>
    </select>
  </div>
</template>

<script>
import {store} from '../state'
export default {
  name: 'Pokemon',
  props:['gen','selectedPokemon'],
  data: function(){
    return {
      state: store.state
    }
  },
  computed:{
      iconSrc: function(){
        let iconExt =".png";
        if(this.state.iconRoute == ""){return "";}
        if(this.state.iconIsGif) { iconExt = ".gif";}
        return `${this.state.iconRoute}${this.zeroOutNumber(this.state.activePokemon)}${iconExt}`;
      },
      normalSrc: function(){
        return `${this.state.normalRoute}${this.zeroOutNumber(this.state.activePokemon)}.png`;
      },
      shinySrc: function(){
        return `${this.state.normalRoute}${this.zeroOutNumber(this.state.activePokemon)}.png`;
      }
  },
  mounted:function(){
    this.validateRoute();
  },
  methods: {
   newGeneration: function(e){
     this.setGenRoute(e.srcElement.value);
   },
   setGenRoute: function(newGen){
     this.$router.push({ path: `/${newGen}/${this.selectedPokemon}` });
   },
   newPokemon: function(){
     let number = Math.floor(Math.random() * (this.state.lastPokemon+1));
     if(number == 0){alert("i randomly generated 0");}
     this.$router.push({ path: `/${this.gen}/${number}` })
   },
   zeroOutNumber: function(number){
     return ("000" + number).slice(-3);
   },
   validateRoute(){
     let generation = store.getGeneration(this.gen);
     if(generation == null){
       this.setGenRoute("rb");
       return;
     }
     store.setActiveGeneration(generation);
      if(this.selectedPokemon === undefined
        || isNaN(this.selectedPokemon * 1)
        || this.selectedPokemon * 1 > this.state.lastPokemon
        || this.selectedPokemon == 0){
        this.newPokemon();
      }
      else{
        store.setActivePokemon(this.selectedPokemon);
      }
   }
  },
  watch:{
    $route(){
      this.validateRoute();
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
