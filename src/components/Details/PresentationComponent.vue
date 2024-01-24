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
                    <img :src="`/src/assets/icons/${item.type.name}.png`" alt="">
                    <p> {{ transformaCamelCase(item.type.name) }}</p>
                </div>
                <div class="badge water" v-if="detalhesEspecie.is_baby">
                    <p>Baby</p>
                </div>
                <div class="badge dark" v-if="detalhesEspecie.is_legendary">
                    <p>Legendary</p>
                </div>
                <div class="badge dark" v-if="detalhesEspecie.is_mythical">
                    <p>Mythical</p>
                </div>
            </div>

            <p v-if="Object.keys(detalhesEspecie).length > 0 && detalhesEspecie.habitat != undefined"><b>Habitat</b> {{
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

                </div>
            </div>

            <div class="combat">
                <div class="doubleDamageContainer" style="    margin-right: 5%;
" v-if="Object.keys(strongAgainst).length > 0">
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


            <div class="">
                <h4>Extra Info</h4>
                <div class="baseContainer">
                    <ul class="">

                    </ul>

                    <div v-if="Object.keys(detalhesEspecie).length > 0" style="display: flex;">
                        <div class="" style="margin-right: 4%;">
                            <h6> Hapiness</h6>
                            <p style="color: white;">{{ detalhesEspecie.base_happiness ?? '-' }} </p>

                        </div>
                        <div class="" style="margin-right: 4%;">
                            <h6>Capture Rate
                            </h6>
                            <p style="color: white;">{{ detalhesEspecie.capture_rate ?? '-' }} </p>

                        </div>
                        <div class="" style="margin-right: 4%;">
                            <h6>Color</h6>
                            <p style="color: white;">{{ transformaCamelCase(detalhesEspecie.color.name ?? '-') ?? '-' }}
                            </p>

                        </div>
                        <div class="" style="margin-right: 4%;">
                            <h6>Base Experience</h6>
                            <p style="color: white;">{{ pokemon.base_experience }} XP
                            </p>

                        </div>

                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<style>
.stats {
    margin-top: 2%;
}

.combat {
    display: flex;
    justify-content: space-between;
    margin: 3% auto;
}

.doubleDamage {
    display: grid;
    grid-template-areas: 'item item';
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

    gap: 5%;
    padding: 5%;
    width: 100%;

}

.baseContainer {
    background-color: #1A1A1A;
    padding: 2%;
    margin-top: 10px;
    border-radius: 10px;
    height: 100%;
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

.badge img{
    width: 15% !important;
    /* background-color: transparent; */
}

.typeList {

    margin-top: 9%;
    display: flex;
    justify-content: space-around;
    padding: 0 8%;
    gap: 10%;
}

.doubleDamage {
    margin-right: 5%;
}

.genera {
    background-color: red;
    padding: 4% !important;
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
</style>

<script>
export default {
    props: {
        pokemon: Object,
        detalhesEspecie: Object,
        strongAgainst: Object,
        weakAgainst: Object,
    },
    data() {
        return {

        }
    },

    computed: {
        generaPokemon() {
            if (this.detalhesEspecie.genera) {
                let genera = this.detalhesEspecie.genera.filter((element) => element.language.name == 'en')[0].genus
                return genera
            }
            return ''
        },
        descriptionPokemon() {
            if (this.detalhesEspecie.flavor_text_entries) {
                let description = this.detalhesEspecie.flavor_text_entries.filter((element) => element.language.name == 'en')[0].flavor_text
                return description
            }
            return ''
        }, getGender() {
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
    },
    methods: {

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



    }
}
</script>