<template>
    
    <div class="main-container evolucoesContainer">
        <h3>Evolutions</h3>
        <div class="evolucoes">
            <div class="evolucao-item" v-for="(item, key, index) in arvoreEvolucao" :key="index">
                <div class="">
                    <PokemonCard style="" class="item" :pokemon="item" :key="item.name">
                    </PokemonCard>
                </div>

                <div class="" style="display: flex; flex-direction: column;">
                    <div v-for="(item, key, index) in linhasEvolucao" :key="index"
                        style="display: flex;flex-direction: row !important;" class="">
                        <div class="evolucao-item" v-for="(pokem, index, key) in item">


                            <h1 v-if="index < item.length">></h1>

                            <PokemonCard class="item" :pokemon="pokem" :key="pokem.name">
                            </PokemonCard>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>


</template>