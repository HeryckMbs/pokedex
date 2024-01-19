<template>
    <div class="main-container">
        <div class="presentation">
            <h2>#{{ pokemon.id }}</h2>
            <h1>{{ transformaCamelCase(pokemon.name) }}</h1>
            <div class="badge genera">
                {{ generaPokemon }}
            </div>
            <div class="image">

                <img :src="pokemon.sprites.other['dream_world'].front_default" alt="">

            </div>
            <div class="typeList">
                <div :class="['badge', item.type.name]" v-for="item in pokemon.types">
                    {{ transformaCamelCase(item.type.name) }}
                </div>
            </div>
            <p><b>Height</b> {{ pokemon.height / 10 }} m</p>
            <p><b>Weight</b> {{ pokemon.weight / 10 }} Kg</p>
            <p>Male : {{ getGender.male }}</p>
            <p>Female :{{ getGender.female }}</p>
            <div class="genderRate">

            </div>
        </div>
        <div class="infos">
            <div>
                <h2>About</h2>
                <div class="about">
                    {{ descriptionPokemon }}
                </div>
            </div>

            <div class="combat">
                <div class="doubleDamageContainer">
                    <h2>Double damage To</h2>
                    <div class="about doubleDamage">
                        <div :class="[index, 'badge']" v-for="(item, index) in strongAgainst">
                            {{ transformaCamelCase(index) }}
                        </div>
                    </div>
                </div>
                <div class="doubleDamageContainer">
                    <h2>Double damage To</h2>
                    <div class="about doubleDamage">
                        <div :class="[index, 'badge']" v-for="(item, index) in strongAgainst">
                            {{ transformaCamelCase(index) }}
                        </div>
                    </div>
                </div>
            </div>
            <ProgressBar :value="40"> {{ 10 }}/100 </ProgressBar>

        </div>
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
                            <label for="">Habitat</label>
                            <p>{{ transformaCamelCase(detalhesEspecie.habitat.name) }} </p>
                        </div>
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
                                <div :class="['', 'grid-item', index]" v-for="(item, index) in weakAgainst">
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
.about {
    background-color: #1A1A1A;
    padding: 2%;
    margin-top: 10px;
    border-radius: 10px;
    height: 100%;
}

.combat {
    display: flex;

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
    font-size: 0.7em
  }

.doubleDamage {
    display: grid;
    grid-template-areas: 'item item';
    gap: 5%;
    padding: 8%;

}

.doubleDamageContainer {
    margin-right: 5%;
    width: 30%;
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
    padding: 17%;
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

.presentation {
    width: 15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1A1A1A;
    border-radius: 10px;
}

.image {
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.image img {
    width: 70%;
}

.infos {
    width: 75%;
}
</style>

<script>
import Api from '@/http/Api';
import { VueperSlides, VueperSlide } from 'vueperslides'
import ProgressBar from 'primevue/progressbar';

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
            let description = this.detalhesEspecie.flavor_text_entries.filter((element) => element.language.name == 'en')[0].flavor_text
            return description
        },
        generaPokemon() {
            let genera = this.detalhesEspecie.genera.filter((element) => element.language.name == 'en')[0].genus
            return genera
        },
        spriteImages() {
            let images = this.filtrarNaoNulos(this.pokemon.sprites);
            return images;
        },
        showdownImages() {
            return this.filtrarNaoNulos(this.pokemon.sprites.other.showdown);
        },
        mainArtsImages() {
            let imagesDream = this.filtrarNaoNulos(this.pokemon.sprites.other.dream_world);
            let home = this.filtrarNaoNulos(this.pokemon.sprites.other.home);
            let oficialArt = this.filtrarNaoNulos(this.pokemon.sprites.other['official-artwork']);
            return [...Object.values(imagesDream), ...Object.values(home), ...Object.values(oficialArt)]
        }

    },
    components: {
        ProgressBar
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