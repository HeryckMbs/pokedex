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
                    <!-- <ProgressBar :value="50"></ProgressBar> -->

                    <div :class="[]">

                        <!--  -->
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

                    <div v-if="Object.keys(detalhesEspecie).length > 0 " style="display: flex;">
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
                    <!-- <ProgressBar :value="50"></ProgressBar> -->

                </div>
            </div>


        </div>
    </div>

</template>