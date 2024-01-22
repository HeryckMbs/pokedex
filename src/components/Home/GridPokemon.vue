<template>
    <div class="grid">

        <PokemonCard class="item" :pokemon="pokemon" v-for="pokemon in $store.state.pokemons_carregados" :key="pokemon.id">
        </PokemonCard>
    </div>
</template>

<style scoped>


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
    components: { PokemonCard },
    created() {
    },
    data() {
        return {
            next_url: '',
        }
    },
    methods: {


        async loadPokemons() {
            if (!this.$store.state.loading) {
                this.$store.commit('setLoading')

                
                await Api.callApi().get(this.next_url != '' ? this.next_url : '/pokemon').then(response => {
                    this.next_url = response.data.next;
                    for (let item of response.data.results) {
                        Api.callApi().get(`/pokemon/${item.name}`).then(res => {
                            this.$store.commit('storePokemons', res.data)
                        }).catch(error => { })
                    }
                    this.$store.commit('unsetLoading')

                }).catch(error => {
                    this.$store.commit('unsetLoading')

                })


            }


        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if(this.$route.name == 'catalogo'){
                const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

                if (scrollTop + clientHeight >= scrollHeight - 5) {
                    this.loadPokemons();
                }
            }

        });

    },
    beforeMount() {
        if (this.$store.state.pokemons_carregados.length == 0) {
            this.loadPokemons()
        }
    }
}
</script>