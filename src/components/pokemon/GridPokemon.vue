<template>
    <button class="showFilters" @click="showFilters = !showFilters">Mostrar filtros</button>
    <Transition>

        <div v-if="showFilters" class="filtros">
            <div class="filterBox">
                <h4>Pesquisa</h4>
                <input type="text" name="" class="filterField" v-model="pesquisa" id="">
            </div>
            <div class="order">
                <h4 for="">Ordenar por</h4>
                <select name="" @change="orderPokemons()" v-model="order" id="">
                    <option value="nomeCrescente">Nome - Crescente</option>
                    <option value="nomeDecrescente">Nome - Decrescente</option>
                    <option value="numeroCrescente">Número - Crescente</option>
                    <option value="numeroDecrescente">Número - Decrescente</option>
                </select>
            </div>
            <div class=" gridTypes">
                <div :class="[item, 'typeFilter']" @click="selectTypeFilter($event, item)" v-for="(item, idx) in types">
                    {{
                        item.toLowerCase() }}</div>
            </div>

            <button class=" primary-button" @click="filterPokemon()">Pesquisar</button>

        </div>
    </Transition>
    <div class="grid">

        <PokemonCard class="item" :pokemon="pokemon" v-for="pokemon in pokemon_filtrados" :key="pokemon.id">
        </PokemonCard>

    </div>
    <div v-show="pokemon_filtrados.length == 0" class=" noContent" >
        <img src="https://http.cat/204" alt="">
    </div>
    <div class="morePokemons">
        <button style="margin: 0 auto" class="primary-button" @click="loadPokemons();">Carregar mais Pokemons</button>
    </div>
    <a href="#nav" id="goSearch" class="">
        <span class="material-symbols-outlined">
            arrow_upward
        </span>
    </a>
</template>

<style scoped>
.noContent{
    display: flex;
    justify-content: center;
    margin: 10px;
}
.material-symbols-outlined {
    color: white;
    font-variation-settings:
        'FILL' 1,
        'wght' 1000
}

h4 {
    margin-bottom: 10px !important;

}

#goSearch {
    cursor: pointer;

    position: fixed;
    bottom: 4vh;
    left: 4vw;
    background-color: red;
    border-radius: 50%;
    padding: 20px;
}

.morePokemons {
    width: 100%;
    display: flex;
}


.showFilters {
    margin: 0 2% !important;
    padding: 0 2% !important;

}


/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.typeFilter {
    opacity: 0.5;
    padding: 10px;
    display: flex;
    justify-content: center;
    font-size: 3vh;
    cursor: pointer;
}




.order {
    display: flex;
    flex-direction: column;
    /* margin: 2% auto; */
}

.order select {
    border-radius: 10px;
    border: none;
    padding: 10px;
}

.filterBox {
    /* margin: 2% 0; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.filterField {
    width: 100%;
    margin-top: 10px;
    padding: 0.5%;
    border-radius: 10px;
    border: 0;
}

h1 {
    margin: 0 !important;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}

.gridTypes {
    margin-top: 1%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;


}

.filtros {
    padding: 0 2%;
}
</style>

<script >
import PokemonCard from './PokemonCard.vue'
import { searchPokemons,getTypes } from '@/services/GridService'
export default {
    components: { PokemonCard },
    created() {
        this.pokemon_filtrados = this.$store.state.pokemons_carregados;
    },

    data() {
        return {
            next_url: '',
            pokemon_filtrados: [],
            pesquisa: '',
            types: [],
            typesSelecteds: [],
            showFilters: false,
            order: ''
        }
    },
    methods: {
        selectTypeFilter(event, item) {
            if (!this.typesSelecteds.includes(item)) {
                this.typesSelecteds.push(item)
                event.srcElement.style.boxShadow = '0 3px 11px rgba(255, 255, 255, 0.8)'
                event.srcElement.style.opacity = '1'

            } else {
                this.typesSelecteds = this.typesSelecteds.filter((element) => element != item)
                event.srcElement.style.boxShadow = '0 3px 11px rgba(0, 0, 0, 0.8)'
                event.srcElement.style.opacity = '0.8'

            }


        },
        orderDecrescente(a, b) {
            if (a > b) {
                return -1;
            } else if (a < b) {
                return 1;
            } else {
                return 0;
            }
        },
        orderCrescente(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        },
        filterPokemon() {
            if (this.pesquisa == '' && this.typesSelecteds.length == 0) {
                this.pokemon_filtrados = this.$store.state.pokemons_carregados;
            } else {
                this.pokemon_filtrados = this.$store.state.pokemons_carregados.filter((element) => {
                    if (this.typesSelecteds.length == 0) {
                        return true
                    } else {
                        for (var type of element.types) {
                            if (this.typesSelecteds.includes(type.type.name)) {
                                return true
                            }
                        }
                        return false;
                    }


                }).filter((element) => this.pesquisa != '' ? element.name.includes(this.pesquisa.toLowerCase()) : true)


            }
        },

        orderPokemons() {
            if (this.order == 'nomeCrescente') {
                this.pokemon_filtrados = this.pokemon_filtrados.sort((a, b) => this.orderCrescente(a.name, b.name))
            }
            if (this.order == 'numeroCrescente') {
                this.pokemon_filtrados = this.pokemon_filtrados.sort((a, b) => this.orderCrescente(a.id, b.id))
            }
            if (this.order == 'nomeDecrescente') {
                this.pokemon_filtrados = this.pokemon_filtrados.sort((a, b) => this.orderDecrescente(a.nome, b.nome))
            }
            if (this.order == 'numeroDecrescente') {
                this.pokemon_filtrados = this.pokemon_filtrados.sort((a, b) => this.orderDecrescente(a.id, b.id))
            }
        },
        async loadPokemons() {
            if (!this.$store.state.loading) {
                this.$store.commit('setLoading')

                const url = this.next_url != '' ? this.next_url : '/pokemon?offset=0&limit=600"';
                this.next_url = await searchPokemons(url)

                this.pokemon_filtrados = this.$store.state.pokemons_carregados;

            }

            this.$store.commit('unsetLoading')

        }
    },
    async beforeMount() {
        if (this.$store.state.pokemons_carregados.length == 0) {
            this.loadPokemons()
        }
        let typesPokemon = await getTypes();
        for (let item of typesPokemon) {
            this.types.push(item.name)
        }


    }
}
</script>