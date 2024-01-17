import { createStore } from "vuex";

export default createStore({
    state:{
        pokemon_selecionado : {},
        pokemons_carregados : []
    },
    mutations:{
        storePokemons(state,data){
            state.pokemons_carregados.push(data)
            state.pokemons_carregados.sort((a,b) => {
                if (a.id < b.id){
                    return -1;
                }
                if (a.id > b.id){
                    return 1;
                }
                return 0;
              })
        },
        clearPokemons(state){
            state.pokemons_carregados = [];
        }
       
    }
})