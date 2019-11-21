var store = {
    state: {
        activePokemon: -1,
        msg: "download some Sword-Shield pokemans",
        iconRoute: "https://serebii.net/pokedex-swsh/icon/",
        normalRoute: "https://serebii.net/swordshield/pokemon/",
        shinyRoute: "https://serebii.net/Shiny/SWSH/",
        lastPokemon: 890
    },
    setActivePokemon : function(newPokemon){
        this.state.activePokemon = newPokemon;
    }
}

export {store}