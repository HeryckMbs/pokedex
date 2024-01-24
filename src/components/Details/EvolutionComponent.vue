<template>
    <div class="main-container evolucoesContainer">
        <h3>Evolutions</h3>
        <div class="evolucoes">
            <div class="initial" v-for="(item, key, index) in arvoreEvolucao" :key="index">
                <div class="">
                    <PokemonCard style="" class="item" :pokemon="item" :key="item.name">
                    </PokemonCard>
                </div>

            </div>

            <div class="line">
                <div v-for="(item, key, index) in linhasEvolucao" :key="index"
                    style="display: flex;flex-direction: row !important; height: 100%;" class="">
                    <div class="evolucao-item" v-for="(pokem, index, key) in item">
                        <h1 v-if="index < item.length">></h1>



                        <PokemonCard class="item" :pokemon="pokem" :key="pokem.name">
                        </PokemonCard>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.initial {
    width: 20%;
}


.evolucao-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
}

.evolucoesContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 3% !important;
    align-items: center;
}

.evolucoes {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;


}
</style>

<script>

import PokemonCard from '../Home/PokemonCard.vue';

export default {
    components: { PokemonCard },
    props: {
        linhasEvolucao: Object,
        arvoreEvolucao: Object
    }
}
</script>