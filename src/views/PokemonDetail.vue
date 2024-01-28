<template>
    <div class="links">
        <a v-if="$route.params.id > 1" :href="`/pokemon/${parseInt($route.params.id) - 1}`">Previous</a>
        <a :href="`/pokemon/${parseInt($route.params.id) + 1}`">Next</a>
    </div>
    <PresentationComponent :pokemon="pokemon" :detalhesEspecie="detalhesEspecie" :strongAgainst="strongAgainst"
        :weakAgainst="weakAgainst"></PresentationComponent>

    <EvolutionComponent :linhasEvolucao="linhasEvolucaoComputed" :arvoreEvolucao="arvoreEvolucaoComputed" />
    <GaleryComponent :images="pokemon['sprites']"></GaleryComponent>
</template>


<style >
h2,
h1,
h4,
h3,
h5,
h6 {
    color: #ED1E24;

}
</style>

<script>
import ProgressBar from 'primevue/progressbar';
import PokemonCard from '@/components/Home/PokemonCard.vue';
import EvolutionComponent from '@/components/Details/EvolutionComponent.vue';
import GaleryComponent from '@/components/Details/GaleryComponent.vue'
import PresentationComponent from '@/components/Details/PresentationComponent.vue';
import getPokemonDetail from '@/services/PokemonDetailService.js';
import getEvolutionChain from '@/services/PokemonEvolution.js';
export default {

    components: {
        ProgressBar,
        PokemonCard,
        GaleryComponent,
        EvolutionComponent,
        PresentationComponent,
        PresentationComponent
    },

    data() {
        return {
            linhasEvolucao: {},
            arvoreEvolucao: {},
            pokemon: {},
            evolucao: {},
            detalhesEspecie: {},
            strongAgainst: {},
            weakAgainst: {},
        };
    },
    computed: {
        linhasEvolucaoComputed() {
            return this.linhasEvolucao
        },
        arvoreEvolucaoComputed() {
            return this.arvoreEvolucao
        },
    },
    async created() {
        this.$store.commit('setLoading')

        let id = this.$route.params.id;

        const data = await getPokemonDetail(id);
        const evolucao = await getEvolutionChain(data['detalhesEspecie'].evolution_chain.url)

        this.pokemon = data['pokemon']
        this.evolucao = data['evolucao']
        this.detalhesEspecie = data['detalhesEspecie']
        this.weakAgainst = data['weakAgainst']
        this.strongAgainst = data['strongAgainst']
        this.linhasEvolucao = evolucao['linhas']
        this.arvoreEvolucao = evolucao['arvore']
        this.$store.commit('unsetLoading')

    },

}
</script>