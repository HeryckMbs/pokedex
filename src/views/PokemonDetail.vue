<template>
    <div class="links">
        <a v-if="$route.params.id > 1" :href="`/pokemon/${parseInt($route.params.id) - 1}`">Previous</a>
        <a :href="`/pokemon/${parseInt($route.params.id) + 1}`">Next</a>
    </div>
    <PresentationComponent :pokemon="pokemon" :detalhesEspecie="detalhesEspecie" :strongAgainst="strongAgainst"
        :weakAgainst="weakAgainst"></PresentationComponent>

    <EvolutionComponent :linhasEvolucao="linhasEvolucao" :arvoreEvolucao="arvoreEvolucao" />

    <GaleryComponent :images="pokemon['sprites']"></GaleryComponent>
</template>


<style ></style>

<script>
import ProgressBar from 'primevue/progressbar';
import PokemonCard from '@/components/pokemon/PokemonCard.vue';
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
    beforeCreate() {
        if (!this.$store.state.loading) {
            this.$store.commit('setLoading')
        }
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

    },
    watch: {
        async detalhesEspecie(newValue, oldValue) {
            const evolucao = await getEvolutionChain(this.detalhesEspecie.evolution_chain.url)
            this.linhasEvolucao = evolucao['linhas']
            this.arvoreEvolucao = evolucao['arvore']
            this.$store.commit('unsetLoading')
        }
    },
    async created() {

        let id = this.$route.params.id;
        const data = await getPokemonDetail(id);
        this.pokemon = data['pokemon']
        this.evolucao = data['evolucao']
        this.detalhesEspecie = data['detalhesEspecie']
        this.weakAgainst = data['weakAgainst']
        this.strongAgainst = data['strongAgainst']
        console.log(data['weakAgainst'],this.weakAgainst)


    }

}
</script>