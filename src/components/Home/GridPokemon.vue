<template>
    <div class="grid">
      
          <PokemonCard
         class="item" 
         :pokemon="pokemon" 
         v-for="pokemon in $store.state.pokemons_carregados" 
         :key="pokemon.id">
        </PokemonCard>
    </div>
    
</template>

<style scoped>
.item {
    grid-area: 'item';
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #303134;
    margin: 15px;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.8);
    padding: 15px;
    border-radius: 10px;
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
    -ms-transform: translateY(0);
    -o-transform: translateY(0);
    transform: translateY(0);
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    -moz-transition: 0.5s;
    transition: 0.5s;
}

.item:hover {
    -webkit-transform: translateY(-16px);
    -moz-transform: translateY(-16px);
    -ms-transform: translateY(-16px);
    -o-transform: translateY(-16px);
    transform: translateY(-16px);
}

.grid {
    margin: 1% 10%;
    display: grid;
    
    grid-template-areas: 'item item item item ';
}
</style>

<script >
import Api from '/src/http/Api.js';
import PokemonCard from './PokemonCard.vue'
export default {
    components:{ PokemonCard },
    created(){
        console.log(this.$store.state.pokemons_carregados)
    },
    data() {
        return {
            next_url: '/pokemon',
        }
    },
    methods: {

        loadPokemons() {
            
            document.getElementById('loader').style.display = 'flex';
            if(this.$store.state.pokemons_carregados.length == 0){
                Api.callApi().get(this.next_url).then(response => {
                    this.next_url = response.data.next;
                    for (let item of response.data.results) {
                        Api.callApi().get(`/pokemon/${item.name}`).then(res => {
    
                            this.$store.commit('storePokemons',res.data)
                        }).catch(error => { })
                    }
                    
                }).catch(error => {
                    
                })
                
            }
            setTimeout(function(){
                document.getElementById('loader').style.display = 'none';
            },300)

        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

            if (scrollTop + clientHeight >= scrollHeight - 5) {
                this.loadPokemons();
            }

        });

    },
    beforeMount() {
     
        this.loadPokemons()
    }
}
</script>