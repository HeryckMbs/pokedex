<template>
    <div @click="goToPokemonDetails($event)">
        

            <img :src="pokemon.sprites.other['dream_world'].front_default" alt="">
            <div class="">
                <div class="content">
                    <h2>{{ captalizeName(pokemon.name) }}</h2>
                    <p class="codPokemon">N° {{ zeroEsquerda(pokemon.id) }}</p>
                </div>
                <div class="types">
                    <div v-for="(item, index) in pokemon.types" :key="index" :class="['type', item.type.name]">
                        {{ captalizeName(item.type.name) }}
                    </div>
                </div>
            </div>
</div>

</template>

<script>
import UtilsMixin from '@/mixins/utils'
export default {
    created() {
    },
    methods:{
        goToPokemonDetails(){
            this.$store.commit('setPokemon',this.pokemon)
            this.$router.push({path: '/pokemon/'+this.pokemon.id})
        }
    },  
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    mixins: [UtilsMixin]
}
</script>

<style scoped>
.content {

    padding: 5% 0;
}
.item a{
    display: flex;
    flex-wrap: nowrap;
    height: 100%;
    flex-direction: column;
}
.types {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 10px
}



.type {
    margin-right: 5px;
    padding: 4% 8%;
    box-shadow: 0 3px 11px rgba(0, 0, 0, 0.8);
    font-size: 100%;
    border-radius: 10px;
}

.link {
    background-color: #121212;
    padding: 10px;
    border-radius: 10px;
    background-color: #550899;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.8);
}

.link a {
    color: white;

}


.codPokemon {
    font-style: italic;
    font-weight: 100;
    color: white;
}


img {
    max-width: 100%;
    width: 100%;
    height: 80%;
    border-radius: 10px;
    background: #242424;
}

.content h2 {
    font-size: 20pt;
    color: white;
}

.content p {
    margin-top: 5px;
    font-size: 15pt;
}
</style>