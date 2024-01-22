<template>
    <div class="main-container">
        <div class="presentation">
            <h2>#{{ pokemon.id }}</h2>
            <h1>{{ transformaCamelCase(pokemon.name) }}</h1>
            <div class="badge genera">
                {{ generaPokemon }}
            </div>
            <div class="image">

                <img v-if="pokemon.sprites != undefined" :src="pokemon.sprites.other['official-artwork'].front_default"
                    alt="">

            </div>

            <div class="typeList">
                <div :class="['badge', item.type.name]" :key="idx" v-for="(item, idx) in pokemon.types">
                    {{ transformaCamelCase(item.type.name) }}
                </div>
                <div class=" water" v-if="detalhesEspecie.is_baby">
                    Baby
                </div>
                <div class="badge dark" v-if="detalhesEspecie.is_legendary">
                    Legendary
                </div>
                <div class="badge dark" v-if="detalhesEspecie.is_mythical">
                    Baby
                </div>
            </div>

            <p v-if="Object.keys(this.detalhesEspecie).length > 0"><b>Habitat</b> {{
                transformaCamelCase(detalhesEspecie.habitat.name) }} </p>

            <p><strong>Height</strong> {{ pokemon.height / 10 }} m</p>
            <p><b>Weight</b> {{ pokemon.weight / 10 }} Kg</p>
            <p>Male : {{ getGender.male }} %</p>
            <p>Female :{{ getGender.female }}%</p>
            <div class="genderRate">

            </div>
        </div>
        <div class="infos">
            <div>
                <h4>About</h4>
                <div class="baseContainer">
                    <p>{{ descriptionPokemon }}</p>
                </div>
            </div>
            <div>
                <h4>Habilities</h4>
                <div class="baseContainer">
                    <ul class="habilities">
                        <li :key="index" v-for="(item, index) in pokemon.abilities">
                            <p>{{ transformaCamelCase(item.ability.name) }}</p>
                        </li>
                    </ul>
                    <div :class="[]">

                        <!--  -->
                    </div>
                </div>
            </div>

            <div class="stats">
                <h4>Base Stats</h4>
                <div class="baseContainer">
                    <ul class="">

                    </ul>
                    <div style="display: flex;">
                        <div class="" :key="index" v-for="(item, index) in pokemon.stats" style="margin-right: 4%;">
                            <h6>{{ transformaCamelCase(item.stat.name) }}</h6>
                            <p style="color: white;">{{ item.base_stat }}</p>

                        </div>
                    </div>
                    <!-- <ProgressBar :value="50"></ProgressBar> -->

                    <div :class="[]">

                        <!--  -->
                    </div>
                </div>
            </div>
            <div class="combat">
                <div class="doubleDamageContainer" v-if="Object.keys(strongAgainst).length > 0">
                    <h4>Double damage To</h4>

                    <div class="baseContainer doubleDamage">
                        <div :class="[index, 'badge']" :key="index" v-for="(item, index) in strongAgainst">
                            <p> {{ transformaCamelCase(index) }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="doubleDamageContainer" v-if="Object.keys(weakAgainst).length > 0">
                    <h4>Double damage from</h4>
                    <div class="baseContainer doubleDamage">
                        <div :class="[index, 'badge']" :key="index" v-for="(item, index) in weakAgainst">
                            <p> {{ transformaCamelCase(index) }}</p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <h4>Extra Info</h4>
                <div class="baseContainer">
                    <ul class="habilities">
                        <li :key="index" v-for="(item, index) in pokemon.abilities">
                            <p>{{ transformaCamelCase(item.ability.name) }}</p>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
    <div class="main-container evolucoesContainer">
        <h3>Evoluções</h3>
        <div class="evolucoes">
            <div class="evolucao-item" v-for="(item, key, index) in arvoreEvolucao" :key="index">
                <PokemonCard class="item" :pokemon="item" :key="item.id">
                </PokemonCard>
                <span>
                    <h1>></h1>
                </span>
                <div v-for="(item, key, index) in linhasEvolucao" :key="index" style="display: flex;flex-direction: column !important;" class="">
                    <div  class="evolucao-item" v-for="(pokem, index) in item"  >
                        <div>

                            <PokemonCard class="item" :pokemon="pokem" :key="pokem.id">
                            </PokemonCard>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="links">
        <a v-if="$route.params.id > 1" :href="`/pokemon/${parseInt($route.params.id) - 1}`">Previous</a>
        <a :href="`/pokemon/${parseInt($route.params.id) + 1}`">Next</a>
    </div>
    <div class="container name">
        <h1>{{ transformaCamelCase(pokemon.name) }} - N° {{ pokemon.id }}</h1>
    </div>

    <div class="container " id="pokemon">
        <div class="content">

            <div class="column">
                <div class="carateristicas dog-ear">

                    <div class="info">


                        <div class="">
                            <label for="">Base Experience</label>
                            <p>{{ pokemon.base_experience }} XP </p>
                        </div>
                    </div>



                    <div class="" style="display: flex;">
                        <div class="types">
                            <label>Strong against</label>
                            <div class="mini-grid">

                            </div>
                        </div>

                        <div class="types">
                            <label>Weak against</label>
                            <div class="mini-grid">
                                <div :key="index" :class="['', 'grid-item', index]" v-for="(item, index) in weakAgainst">
                                    {{ transformaCamelCase(index) }}
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="types">
                        <label>Abilities</label>
                        <div class=" mini-grid">

                        </div>
                    </div>

                </div>
                <div class="carateristicas dog-ear">

                    <div class="info">
                        <div class="">
                            <label for="">Hapiness</label>
                            <p>{{ detalhesEspecie.base_happiness }} </p>
                        </div>
                        <div class="">
                            <label for="">Capture Rate</label>
                            <p>{{ detalhesEspecie.capture_rate }} </p>
                        </div>
                        <div class="">
                            <label for="">Color</label>
                            <p v-if="Object.keys(this.detalhesEspecie).length > 0">{{
                                transformaCamelCase(detalhesEspecie.color.name) }} </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h1>Galeria</h1>
        <div class="galery">
            <div class="centered" v-for="image in spriteImages" :key="image">
                <img width="50%" :src="image" alt="">

            </div>
            <div v-for="image in showdownImages" :key="image" class="centered">
                <img width="50%" :src="image" alt="">
            </div>
            <div class="centered" v-for="image in mainArtsImages" :key="image">
                <img width="50%" :src="image" alt="">
            </div>

        </div>
        <div class="galery"></div>
        <div style="display: flex; ">
            <!-- <img  v-for="image in pokemon.sprites" :key="image" :src="image" alt=""> -->
        </div>
    </div>
</template>


<style scoped>
.evolucao-item {
    display: flex;
    align-items: center;
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

.badge {
    font-size: 14pt;
    color: white;
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
    gap: 5%;
    padding: 8%;
    width: 100%;

}

.doubleDamage .badge {
    padding: 0 !important;
}


.doubleDamageContainer {
    margin-right: 5%;
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

.badge {
    padding: 10%;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.main-container {
    width: 90%;
    background-color: #242424;
    margin: 0 auto;
    padding: 1%;
    justify-content: center;
    display: flex;
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
        showdownImages() {
            if (this.pokemon.sprites) {
                return this.filtrarNaoNulos(this.pokemon.sprites.other.showdown);
            }
            return []
        },
        mainArtsImages() {
            if (this.pokemon.sprites) {
                let imagesDream = this.filtrarNaoNulos(this.pokemon.sprites.other.dream_world);
                let home = this.filtrarNaoNulos(this.pokemon.sprites.other.home);
                let oficialArt = this.filtrarNaoNulos(this.pokemon.sprites.other['official-artwork']);
                return [...Object.values(imagesDream), ...Object.values(home), ...Object.values(oficialArt)]
            }
            return []
        }

    },
    components: {
        ProgressBar,
        PokemonCard
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
            console.log('oi')
            if (!this.$store.state.loading) {
                this.$store.commit('setLoading')

                await Api.callApi().get(`/pokemon-species/${this.pokemon.id}`).then(response => {
                    this.detalhesEspecie = response.data
                    this.getEvolutionChain(response.data.evolution_chain.url);
                    this.getDamageRelation();
                }).catch(error => {
                    this.$store.commit('unsetLoading')
                })


                this.$store.commit('unsetLoading')
            }
        },
        async getEvolutionChain(url) {
            await Api.callApi().get(url).then(response => {
                this.mountEvolutionTree(response.data.chain)
            }).catch(error => {
                this.$store.commit('unsetLoading')
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
                    this.$store.commit('unsetLoading')
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