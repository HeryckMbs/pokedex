<template>
    <div class="container name">
        <h1>{{ pokemon.name }} - N° {{ pokemon.id }}</h1>
    </div>

    <div class="container " id="pokemon">
        <div class="content">
            <div class="image">
             
                <img :src="pokemon.sprites.other['dream_world'].front_default" alt="">

            </div>
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
                        <p>{{ detalhesEspecie.habitat.name }} </p>
                    </div>
                </div>

                <div class="types">
                    <label>Types</label>
                    <div class="typeList">
                        <div :class="['badge', item.type.name]" v-for="item in pokemon.types">
                            {{ item.type.name }}
                        </div>
                    </div>
                </div>
                <div class="types" v-if="detalhesEspecie.is_baby || detalhesEspecie.is_legendary || detalhesEspecie.is_mythical">
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

            </div>
        </div>
    </div>
</template>
<style scoped>
.name {
    width: 30% !important;
    color: white;
    padding: 1% !important;

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
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);


}

.carateristicas {
    height: 100%;
    width: 50%;
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
}

.image img {
    width: 100%;
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
    font-size: 15pt;
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
export default {

    data() {
        return {
            pokemon: {},
            evolucao: {},
            characteristic: {},
            detalhesEspecie: {}
        };
    },
    methods: {
        async getSpecieDetail() {
            if (!this.$store.state.loading) {
                this.$store.commit('setLoading')


                await Api.callApi().get(`/pokemon-species/${this.pokemon.id}`).then(response => {
                    this.detalhesEspecie = response.data
                    this.getEvolutionChain(response.data.evolution_chain.url);
                    this.getCharacteristic();
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

        async getCharacteristic() {

            await Api.callApi().get(`/characteristic/${this.pokemon.id}`).then(response => {
                this.characteristic = response.data
            }).catch(error => {
                this.$store.commit('unsetLoading')
            })



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
        this.getSpecieDetail();
    }
}
</script>