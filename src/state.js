var store = {
    state: {
        activePokemon: -1,
        msg: "",
        gen: "ss",
        iconRoute: "https://serebii.net/pokedex-swsh/icon/",
        iconIsGif: false,
        normalRoute: "https://serebii.net/swordshield/pokemon/",
        shinyRoute: "https://serebii.net/Shiny/SWSH/",
        lastPokemon: 890,
        generations:[
            {
                name:'Red & Blue',
                gen: 'rb',
                normalRoute:'https://serebii.net/pokearth/sprites/green/',
                iconRoute:'',
                shinyRoute: '',
                lastPokemon: 151
            },
            {
                name:'Gold & Silver',
                gen: 'gs',
                normalRoute:'https://serebii.net/pokearth/sprites/gold/',
                iconRoute:'',
                shinyRoute: 'https://serebii.net/Shiny/Gold/',
                lastPokemon: 251
            },
            {
                name:'Ruby & Sapphire',
                gen: 'rs',
                normalRoute:'https://serebii.net/emerald/pokemon/',
                iconRoute:'https://serebii.net/pokedex-dp/icon/',
                iconIsGif: true,
                shinyRoute: 'https://serebii.net/Shiny/Em/',
                lastPokemon: 386
            },
            {
                name:'Diamond & Pearl',
                gen: 'dp',
                normalRoute:'https://serebii.net/pokearth/sprites/dp/',
                iconRoute:'https://serebii.net/pokedex-dp/icon/',
                iconIsGif: true,
                shinyRoute: 'https://serebii.net/Shiny/DP/',
                lastPokemon: 493
            },
            {
                name:'Black & White',
                gen: 'bw',
                normalRoute:'https://serebii.net/blackwhite/pokemon/',
                iconRoute:'https://serebii.net/pokedex-bw/icon/',
                shinyRoute: 'https://serebii.net/Shiny/BW/',
                lastPokemon: 649
            },
            {
                name:'X & Y',
                gen: 'xy',
                normalRoute:'https://serebii.net/xy/pokemon/',
                iconRoute:'https://serebii.net/pokedex-xy/icon/',
                shinyRoute: 'https://serebii.net/Shiny/xy/',
                lastPokemon: 721
            },
            {
                name:'Sun & Moon',
                gen: 'sm',
                normalRoute:'https://serebii.net/sunmoon/pokemon/',
                iconRoute:'https://serebii.net/pokedex-sm/icon/',
                shinyRoute: 'https://serebii.net/Shiny/SM/',
                lastPokemon: 809
            },
            {
                name:'Sword & Shield',
                gen: 'ss',
                normalRoute: "https://serebii.net/swordshield/pokemon/",
                iconRoute: "https://serebii.net/pokedex-swsh/icon/",
                shinyRoute: "https://serebii.net/Shiny/SWSH/",
                lastPokemon: 890
            },
        ]
    },
    setActivePokemon : function(newPokemon){
        this.state.activePokemon = newPokemon;
    },
    getGeneration: function(gen){
        return this.state.generations.find(g => g.gen == gen);
    },
    setActiveGeneration: function(newGen){
        var activeGen = newGen;
        if(typeof newGen == "string"){
            newGen = newGen.toLowerCase();
            activeGen = this.getGeneration(newGen);
            if(activeGen == null){
                activeGen = this.getGeneration("rb")
            }
        }
        this.state.gen = activeGen.gen;
        this.state.msg = "Download some " + activeGen.name + " Pokemons";
        this.state.normalRoute = activeGen.normalRoute;
        this.state.iconRoute = activeGen.iconRoute;
        this.state.shinyRoute = activeGen.shinyRoute;
        this.state.lastPokemon = activeGen.lastPokemon;
        this.state.iconIsGif = activeGen.iconIsGif;
    }
}

export {store}