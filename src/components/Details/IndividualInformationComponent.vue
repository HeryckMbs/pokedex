<template>
    <div class="presentation">
        <h4>#{{ pokemon.id }}</h4>
        <h3>{{ transformaCamelCase(pokemon.name) }}</h3>
        <div style="display: flex; justify-content: center;">
            <h6 class="">{{ generaPokemon }}</h6>
        </div>
        <div class="image">

            <img v-if="pokemon.sprites != undefined" :src="imagePokemon" alt="">

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

        <p><strong>Height:</strong> {{ pokemon.height / 10 }} m</p>
        <p><b>Weight:</b> {{ pokemon.weight / 10 }} Kg</p>
        <p>Male: {{ getGender.male }}%</p>
        <p>Female: {{ getGender.female }}%</p>

       

        <button @click="savePokemon()" class="primary-button  favorito"> <span id="iconFavorite" class="material-icons material-symbols-outlined  md-red">favorite</span></button>
    </div>
</template>

<style scoped>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,

}
.favorito {
    padding: 10px;
    width: 4vw !important;
    font-size: 0.8vw !important;
}

.badge img {
    width: 15% !important;
    /* background-color: transparent; */
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

.badge {
    margin-right: 5px;
    padding: 2% 4%;
    box-shadow: 0 3px 11px rgba(0, 0, 0, 0.8);
    font-size: 100%;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.typeList {

    margin-top: 9%;
    display: flex;
    justify-content: space-around;
    padding: 0 8%;
    gap: 10%;
}

.presentation .badge {
    max-width: 50% !important;

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
    height: 100%;
    flex: 1;

}


.presentation p {
    margin-top: 5% !important

}

</style>
<script>

export default {
    data(){
        return {
            favorito:false
        }
    },
    watch:{
        favorito(newValue,oldValue){
            if(newValue){
                document.getElementById('iconFavorite').style.fontVariationSettings = "'FILL' 1";
            }else{
                document.getElementById('iconFavorite').style.fontVariationSettings = "'FILL' 0";
            }
        }
    },  
    props: {
        detalhesEspecie: Object,
        pokemon: Object,
    },
    computed: {

        generaPokemon() {
            if (this.detalhesEspecie.genera) {
                let genera = this.detalhesEspecie.genera.find((element) => element.language.name == 'en')? this.detalhesEspecie.genera.find((element) => element.language.name == 'en').genus : ''
                return genera
            }
            return ''
        },
        imagePokemon() {
            
            if (this.pokemon.sprites.other['official-artwork'].front_default != null) {
                return this.pokemon.sprites.other['official-artwork'].front_default
            }
            if (this.pokemon.sprites.other['home'].front_default) {
                return this.pokemon.sprites.other['home'].front_default
            }
            return '/src/assets/no-image.png'
        },
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
                return { 'male': 0, 'female': 0 };
            }
        },
    },
    methods: {
        savePokemon() {

            let pokemonsFavorites = JSON.parse(localStorage.getItem('pokemon_favoritos') ?? '[]')
            let equal = pokemonsFavorites.filter((element) => element.id == this.pokemon.id);

            if (equal.length == 0) {
                pokemonsFavorites.push(this.pokemon);
                this.favorito = true;
            }else{
                pokemonsFavorites = pokemonsFavorites.filter((element) => element.id != this.pokemon.id)
                this.favorito = false
            }

            localStorage.setItem('pokemon_favoritos', JSON.stringify(pokemonsFavorites))

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



    },
    updated(){
        const pokemonsFavoritos = JSON.parse(localStorage.getItem('pokemon_favoritos'));
        this.favorito = pokemonsFavoritos.filter((element) => element.id == this.pokemon.id).length == 1
        if(this.favorito){
            document.getElementById('iconFavorite').style.fontVariationSettings = "'FILL' 1";
        }
    }
}
</script>