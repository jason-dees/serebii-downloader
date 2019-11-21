var store = {
    state: {
        activePokemon: -1,
        msg: "download some Sun-Moon pokemans",
        iconRoute: "https://serebii.net/pokedex-sm/icon/",
        normalRoute: "https://serebii.net/sunmoon/pokemon/",
        shinyRoute: "https://serebii.net/Shiny/SM/",
        lastPokemon: 809
    },
    setActivePokemon : function(newPokemon){
        this.state.activePokemon = newPokemon;
    }
}

export {store}