<template>
    <div class="containerCatalogo">
        <h1>Pokedex</h1>
        <GridPokemon></GridPokemon>


    </div>
</template>

<script>
import GridPokemon from '@/components/Home/GridPokemon.vue';
export default{
    components:{
        GridPokemon
    }
}
</script>

<style scoped>
.containerCatalogo{
    margin: 1% 10%;
}
h1{
    text-align: center;
}
</style>