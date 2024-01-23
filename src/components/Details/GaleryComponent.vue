<template>
    <div class="main-container  galeryContainer">
        <h1>Galery</h1>


        <div class="galery">
            <vueper-slides class="no-shadow" :arrows-outside="false" :visible-slides="1" :slide-multiple="true" :gap="3"
                :slide-ratio="0.9 / 1" :dragging-distance="200"
                :breakpoints="{ 800: { visibleSlides: 4, slideMultiple: 2 } }">
                <vueper-slide v-for="(slide, i) in showdownImages" :key="i" :image="slide" />
            </vueper-slides>


            <vueper-slides :slide-ratio="0.9 / 1" class="no-shadow" arrows-outside bullets-outside transition-speed="250">
                <vueper-slide v-for="(slide, i) in mainArtsImages" :key="i" :image="slide" />

            </vueper-slides>
        </div>

    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    props:['sprites'],
    component:{
        VueperSlides, VueperSlide
    }
    computed: {
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
    data() {
        return {

        }
    }
}
</script>