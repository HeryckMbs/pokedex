<template>
    <div>
        <router-link :to="`pokemon/${pokemon.id}`">

            <img :src="pokemon.sprites.other.home.front_default" alt="">
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
        </router-link>
    </div>
</template>

<script>
import UtilsMixin from '@/mixins/utils'
export default {
    created() {
        console.log(this.pokemon)
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

.normal {
    color: black;
    background-color: #A8A878;
    /* Cor neutra para representar Normal */
}

.fighting {
    color: white;
    background-color: #C03028;
    /* Cor de luta para representar Fighting */
}

.flying {
    color: white;
    background-color: #A890F0;
    /* Cor de voo para representar Flying */
}

.poison {
    color: white;
    background-color: #A040A0;
    /* Cor venenosa para representar Poison */
}

.ground {
    color: white;
    background-color: #794500;
    /* Cor de solo para representar Ground */
}

.rock {
    background-color: #B8A038;
    /* Cor de rocha para representar Rock */
}

.bug {
    color: white;
    background-color: #A8B820;
    /* Cor de inseto para representar Bug */
}

.ghost {
    color: white;

    background-color: #705898;
    /* Cor fantasmagórica para representar Ghost */
}

.steel {
    color: black;
    background-color: #B8B8D0;
    /* Cor de aço para representar Steel */
}

.fire {
    color: white;
    background-color: #F08030;
    /* Cor de fogo para representar Fire */
}

.water {
    color: white;
    background-color: #6890F0;
    /* Cor de água para representar Water */
}

.grass {
    color: white;
    background-color: #78C850;
    /* Cor de grama para representar Grass */
}

.electric {
    color: #121212;
    background-color: #F8D030;
    /* Cor elétrica para representar Electric */
}

.psychic {
    color: black;
    background-color: #F85888;
    /* Cor psíquica para representar Psychic */
}

.ice {
    color: black;
    background-color: #98D8D8;
    /* Cor de gelo para representar Ice */
}

.dragon {
    color: white;
    background-color: #7038F8;
    /* Cor de dragão para representar Dragon */
}

.dark {
    background-color: black;
    /* Cor sombria para representar Dark */
}

.fairy {
    color: #121212;
    background-color: #EE99AC;
    /* Cor de fada para representar Fairy */
}

.unknown {
    background-color: #68A090;
    /* Cor desconhecida para representar Unknown */
}

.shadow {
    background-color: #5A496E;
    /* Cor de sombra para representar Shadow */
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