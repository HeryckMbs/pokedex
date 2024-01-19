<template>
    <div class="container name">
        <h1>{{ transformaCamelCase(pokemon.name) }} - N° {{ pokemon.id }}</h1>
    </div>

    <div class="container " id="pokemon">
        <div class="content">
            <div class="image">

                <img :src="pokemon.sprites.other['dream_world'].front_default" alt="">

            </div>
            <div class="column">
                <div class="carateristicas dog-ear">

                    <div class="info">
                        <div class="">
                            <label for="">Height</label>
                            <p>{{ pokemon.height / 10 }} m</p>
                        </div>
                        <div class="">
                            <label for="">Weight</label>
                            <p>{{ pokemon.weight / 10 }} Kg</p>
                        </div>
                        <div class="">
                            <label for="">Habitat</label>
                            <p>{{ transformaCamelCase(detalhesEspecie.habitat.name) }} </p>
                        </div>
                        <div class="">
                            <label for="">Base Experience</label>
                            <p>{{ pokemon.base_experience }} XP </p>
                        </div>
                    </div>

                    <div class="types">
                        <label>Types</label>
                        <div class="typeList">
                            <div :class="['badge', item.type.name]" v-for="item in pokemon.types">
                                {{ transformaCamelCase(item.type.name) }}
                            </div>
                        </div>
                    </div>

                    <div class="" style="display: flex;">
                        <div class="types">
                            <label>Strong against</label>
                            <div class="mini-grid">
                                <div :class="['', 'grid-item', index]" v-for="(item, index) in strongAgainst"
                                    class="typeList">
                                    {{ transformaCamelCase(index) }}
                                </div>
                            </div>
                        </div>

                        <div class="types">
                            <label>Weak against</label>
                            <div class="mini-grid">
                                <div :class="['', 'grid-item', index]" v-for="(item, index) in weakAgainst"
                                    class="typeList">
                                    {{ transformaCamelCase(index) }}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="types"
                        v-if="detalhesEspecie.is_baby || detalhesEspecie.is_legendary || detalhesEspecie.is_mythical">
                        <label>Special Attributes</label>
                        <div class="typeList">
                            <div class="badge" v-if="detalhesEspecie.is_baby">
                                Baby
                            </div>
                            <div class="badge" v-if="detalhesEspecie.is_legendary">
                                Legendary
                            </div>
                            <div class="badge" v-if="detalhesEspecie.is_mythical">
                                Baby
                            </div>
                        </div>
                    </div>
                    <div class="types">
                        <label>Abilities</label>
                        <div class=" mini-grid">
                            <div v-for="item in pokemon.abilities.filter((element) => !element.is_hidden)"
                                :class="['grid-item', 'badge']">
                                {{ transformaCamelCase(item.ability.name) }}

                                <!--  -->
                            </div>
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
                            <p>{{ transformaCamelCase(detalhesEspecie.color.name) }} </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <h1>Galeria</h1>
        <div class="galery">
            <img width="150%" v-for="image in spriteImages" :key="image" :src="image" alt="">
            <img width="100%" v-for="image in showdownImages" :key="image" :src="image" alt="">
            <img width="100%" v-for="image in mainArtsImages" :key="image" :src="image" alt="">

        </div>
        <div class="galery"></div>
        <div style="display: flex; ">
            <!-- <img  v-for="image in pokemon.sprites" :key="image" :src="image" alt=""> -->
        </div>
    </div>
</template>
<style scoped>
.galery {
    display: grid;
    grid-template-areas: 'item item item item ';
    justify-content: space-around;
    width: 95%;
}

.name {
    width: 30% !important;
    color: white;
    padding: 1% !important;

}

.strongAgainst {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    grid-gap: 10px;
}

.mini-grid {
    display: grid;
    max-width: 85%;
    margin-top: 2%;
    grid-template-areas: 'item item item ';
    gap: 10px;
}

.grid-item {
    grid-area: 'item';
    border-radius: 10px;
    padding: 12%;
    max-width: 100%;
    margin-right: 2%;
    background-color: #D9DAD9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    color: white;
}

.column {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.content {
    display: flex;
    width: 100%;
    justify-content: space-around;
}

.badge {
    border-radius: 10px;
    padding: 2% 3.5%;
    margin-right: 2%;
    background-color: #6791B9;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
    color: white;

}

.carateristicas {
    height: 100%;
    width: 100%;
    margin: 10px;
    background-color: #121212;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1%;
}

.image {
    width: 35%;
    padding: 2%;
    background-color: #121212;
    box-shadow: 0 7px 15px rgba(0, 0, 0, 0.8);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.image img {
    width: 80%;
    height: 80%;
    border-radius: 10px;
}


.info {
    margin: 10px;
    justify-content: start;
    display: flex;
    width: 100%;
}

.typeList {
    justify-content: start;
    display: flex;
    margin-top: 1%;
}

.types {
    margin: 10px;

    width: 100%;
}

.info div {
    margin-right: 4%;
}

.info p {
    font-size: 13pt;
    color: white;
}

.carateristicas label {
    font-size: 18pt;
    color: #ED1E24;
}

.container {

    width: 85%;
    height: 100%;
    border: 100px;

    margin: 10px auto;
    padding: 2%;
    border-radius: 10px;
    background-color: #242424;

    display: flex;
    flex-direction: column;

}

.dog-ear {
    position: relative;

}

.dog-ear::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    border: 20px solid transparent;
    border-right-color: #242424;
    border-bottom-color: #242424;
    box-sizing: border-box;
}
</style>

<script>
import Api from '@/http/Api';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {

    computed: {
        spriteImages() {
            let images = this.filtrarNaoNulos(this.pokemon.sprites);
            return images;
        },
        showdownImages(){
            return this.filtrarNaoNulos(this.pokemon.sprites.other.showdown);
        },
        mainArtsImages(){
            let imagesDream = this.filtrarNaoNulos(this.pokemon.sprites.other.dream_world);
            let home = this.filtrarNaoNulos(this.pokemon.sprites.other.home);
            let oficialArt = this.filtrarNaoNulos(this.pokemon.sprites.other['official-artwork']);
            return [...Object.values(imagesDream),...Object.values(home),...Object.values(oficialArt)]
        }

    },
    components: {
        VueperSlides, VueperSlide
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
            characteristic: {},
            detalhesEspecie: {},
            strongAgainst: {},
            weakAgainst: {},
            imageLinks: []
        };
    },
    methods: {
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
                evolucao = response.data
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
    async beforeMount() {
        if (Object.keys(this.$store.state.pokemon_selecionado).length > 0) {
            this.pokemon = this.$store.state.pokemon_selecionado
            this.getSpecieDetail();

        } else {
            let id = this.$route.params.id;
            await Api.callApi().get(`/pokemon/${id}`).then(res => {
                this.pokemon = res.data

            }).catch(error => { })
        }
        this.imageLinks = this.extrairValores(this.pokemon.sprites)
        this.getSpecieDetail();
    }
}
</script>