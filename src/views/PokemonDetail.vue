<template>
    <div class="links">
        <a v-if="$route.params.id > 1" :href="`/pokemon/${parseInt($route.params.id) - 1}`">Previous</a>
        <a :href="`/pokemon/${parseInt($route.params.id) + 1}`">Next</a>
    </div>

   
<GaleryComponent :sprites="pokemon.sprites"></GaleryComponent>

  
</template>


<style scoped>
.galeryContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3% !important;
    margin-bottom: 3% !important;
}

.vueperslide__image {
    transform: scale(1.5) rotate(-10deg);

}

.vueperslides {
    width: 40%;
    margin-right: 10%;
}

.vueperslide__title {
    font-size: 7em;
    opacity: 0.7;
}

.vueperslides--fixed-height {
    height: 300px;
}

.galery {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
}


.item img {
    height: 10px !;
}

.evolucao-item {
    display: flex;
    align-items: center;
    justify-content: center;
    
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

}

.stats {
    margin-top: 2%;
}



h2,
h1,
h4,
h3,
h5,
h6 {
    color: #ED1E24;

}

ul {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-around;
}

li p {
    color: white;
    text-align: center;
    padding-right: 16px;
    text-decoration: none;
}

.baseContainer {
    background-color: #1A1A1A;
    padding: 2%;
    margin-top: 10px;
    border-radius: 10px;
    height: 100%;
}

.combat {
    display: flex;
    justify-content: space-between;
    margin: 3% auto;
}

.shell {
    height: 20px;
    width: 250px;
    border: 1px solid #aaa;
    border-radius: 13px;
    padding: 3px;
}

.bar {
    background: linear-gradient(to right, #B993D6, #8CA6DB);
    height: 20px;
    width: 15px;
    border-radius: 9px;

}

.bar span {
    float: right;
    padding: 4px 5px;
    color: #fff;
    /* font-size: 0.7em */
}

.doubleDamage {
    display: grid;
    grid-template-areas: 'item item';
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr ));  

    gap: 5%;
    padding: 5%;
    width: 100%;

}

.doubleDamage .badge {
    padding: 0 !important;
}


.doubleDamageContainer {
    width: 50%;
    height: 100%;
}

.statusContainer {
    width: 60%;
}

.typeList {

    margin-top: 9%;
    display: flex;
    justify-content: center;
    gap: 10%;
}

.doubleDamage {
    margin-right: 5%;
}

.genera {
    background-color: red;
    padding: 4% !important;
}

/* .badge {
    padding: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
} */


.main-container {
    width: 90%;
    background-color: #242424;
    margin: 0 auto;
    padding: 1%;
    justify-content: center;
    display: flex;
    border-radius: 10px;
    gap: 2%;
}

.links {
    width: 90%;
    margin: 0 auto;
    padding: 1%;
    justify-content: space-between;
    display: flex;
    gap: 2%;
}

.links a {
    background-color: #242424;
    padding: 1% 2%;
}

.presentation {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1A1A1A;
    border-radius: 10px;
    padding: 1%;
}

.image {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image img {
    width: 90%;
}

.infos {
    width: 70%;
}
</style>

<script>
import Api from '@/http/Api';
import ProgressBar from 'primevue/progressbar';
import PokemonCard from '@/components/Home/PokemonCard.vue';

import GaleryComponent from '@/components/Details/GaleryComponent.vue'
export default {

    computed: {

        getGender() {
            let genderRate = this.detalhesEspecie.gender_rate;
            switch (genderRate) {
                case 0:
                    return { 'male': 100, 'female': 0 };
                case 1:
                    return { 'male': 87.5, 'female': 12.5 };
                case 2:
                    return { 'male': 75, 'female': 25 };
                case 3:
                    return { 'male': 62.5, 'female': 37.5 };
                case 4:
                    return { 'male': 50, 'female': 50 };
                case 5:
                    return { 'male': 37.5, 'female': 62.5 };
                case 6:
                    return { 'male': 25, 'female': 75 }
                case 7:
                    return { 'male': 12.5, 'female': 87.5 };
                case 8:
                    return { 'male': 0, 'female': 100 };
                default:
                    return { 'make': 0 };
            }
        },
        descriptionPokemon() {
            if (this.detalhesEspecie.flavor_text_entries) {
                let description = this.detalhesEspecie.flavor_text_entries.filter((element) => element.language.name == 'en')[0].flavor_text
                return description
            }
            return ''
        },
        generaPokemon() {
            if (this.detalhesEspecie.genera) {
                let genera = this.detalhesEspecie.genera.filter((element) => element.language.name == 'en')[0].genus
                return genera
            }
            return ''
        },
        spriteImages() {
            if (this.pokemon.sprites) {
                let images = this.filtrarNaoNulos(this.pokemon.sprites);
                return images;
            }
            return []
        },


    },
    components: {
        ProgressBar,
        PokemonCard,
        GaleryComponent,
    
    },

    data() {
        return {
            slides: [
                {
                    title: 'Slide #1',
                    content: 'Slide 1 content.'
                },
                {
                    title: 'Slide #2',
                    content: 'Slide 2 content.'
                }
            ],
            pokemon: {},
            evolucao: {},
            arvoreEvolucao: {},
            linhasEvolucao: {},
            characteristic: {},
            detalhesEspecie: {},
            strongAgainst: {},
            weakAgainst: {},
            imageLinks: [],
            teste: {}
        };
    },
    methods: {
        mountChain() {
            Api.callApi().get(`/pokemon/${this.evolucao.specie_initial.name}`).then(res => {

                this.arvoreEvolucao[0] = res.data;
            }).catch(error => { })

            for (let item in this.evolucao.evolutions) {
                let linhaEvolucaoPoke = this.evolucao.evolutions[item];
                this.linhasEvolucao[linhaEvolucaoPoke.line] = [];
                for (var pokemonIt of linhaEvolucaoPoke.evolutions) {
                    Api.callApi().get(`/pokemon/${pokemonIt.name}`).then(res => {
                        console.log(res.data)

                        this.linhasEvolucao[linhaEvolucaoPoke.line].push(res.data)
                    }).catch(error => { })
                }
            }

            console.log(this.arvoreEvolucao)
        },
        // do {
        //     this.evolucao[order] = chain.species;
        //     order++
        //     for(let item of chain.evolves_to){
        //         this.evolucao[order] = item.species;
        //         order++
        //     }
        //     chain = chain.evolves_to[0]
        //     if (chain.evolves_to.length == 0) {
        //         order++
        //         this.evolucao[order] = chain.species;
        //         fim = true;
        //     }
        // } while (!fim)
        mountEvolutionTree(tree) {
            let order = 0;
            let order2 = 0;
            let chain = tree.evolves_to;
            let fim = false


            this.evolucao['specie_initial'] = tree.species;
            this.evolucao['evolutions'] = [];
            for (let item in chain) {
                let cadeia = chain[item];

                let evolutionLine = { line: item, evolutions: [] }

                while (cadeia.evolves_to.length > 0) {
                    evolutionLine.evolutions.push(cadeia.species)
                    cadeia = cadeia.evolves_to[0];
                }

                if (cadeia.evolves_to.length == 0) {
                    evolutionLine.evolutions.push(cadeia.species)

                }
                this.evolucao['evolutions'].push(evolutionLine)

                fim = false;
                // do {

                // } while (!fim)


            }
            console.log('cabou')
            // do {
            // } while ()

            this.mountChain();
        },
        filtrarNaoNulos(objeto) {
            return Object.entries(objeto)
                .filter(([chave, valor]) => valor !== null)
                .reduce((objFiltrado, [chave, valor]) => {
                    if (typeof valor === 'string') {
                        objFiltrado[chave] = valor;
                    }
                    return objFiltrado;
                }, {});
        },
        extrairValores(objeto) {
            let valores = [];

            for (let chave in objeto) {
                if (objeto.hasOwnProperty(chave)) {
                    if (typeof objeto[chave] === 'object') {
                        // Se o valor for um objeto, chama recursivamente a função
                        valores = valores.concat(this.extrairValores(objeto[chave]));
                    } else {
                        // Adiciona o valor ao array
                        valores.push(objeto[chave]);
                    }
                }
            }

            return valores;
        },
        transformaCamelCase(inputString) {
            if (inputString != undefined) {
                // Dividir a string em palavras usando o caractere "-"
                const palavras = inputString.split('-');

                // Capitalizar a primeira letra de cada palavra
                const palavrasCapitalizadas = palavras.map(palavra =>
                    palavra.charAt(0).toUpperCase() + palavra.slice(1)
                );

                // Unir as palavras com um espaço
                const resultado = palavrasCapitalizadas.join(' ');

                return resultado;
            }
            return ''
        },
        async getSpecieDetail() {
            console.log(!this.$store.state.loading)
                
                await Api.callApi().get(`/pokemon-species/${this.pokemon.id}`).then(response => {

                    this.detalhesEspecie = response.data
                    this.getEvolutionChain(response.data.evolution_chain.url);
                    this.getDamageRelation();
                }).catch(error => {
                })


            
        },
        async getEvolutionChain(url) {
            await Api.callApi().get(url).then(response => {
                this.mountEvolutionTree(response.data.chain)
            }).catch(error => {
            })
        },

        async getDamageRelation() {

            for (let item of this.pokemon.types) {
                await Api.callApi().get(`${item.type.url}`).then(response => {

                    for (let damage of response.data.damage_relations.double_damage_from) {
                        if (this.weakAgainst[damage.name] == null) {
                            this.weakAgainst[damage.name] = 1;
                        } else {
                            this.weakAgainst[damage.name]++;
                        }


                    }
                    for (let damage of response.data.damage_relations.double_damage_to) {
                        if (this.strongAgainst[damage.name] == null) {
                            this.strongAgainst[damage.name] = 1;
                        } else {
                            this.strongAgainst[damage.name]++;
                        }

                    }

                }).catch(error => {
                })
            }


        }
    },
    created() {

        if (Object.keys(this.$store.state.pokemon_selecionado).length > 0) {

            this.pokemon = this.$store.state.pokemon_selecionado          

            this.getSpecieDetail();
        } else {
            let id = this.$route.params.id;
            Api.callApi().get(`/pokemon/${id}`).then(res => {
                this.pokemon = res.data
                this.getSpecieDetail();

            }).catch(error => { })
        }
        this.imageLinks = this.extrairValores(this.pokemon.sprites)
    }
}
</script>