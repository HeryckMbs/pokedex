<template>
    <div class="doubleDamageContainer" v-if="Object.keys(arrayDamage).length > 0">
        <h4>{{ title }}</h4>
        <div class="baseContainer doubleDamage">
            <div :class="[index, 'badge']" :key="index+item" v-for="(item, index) in arrayDamage">
                <p> {{ index }} ({{ item }}x)</p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        arrayDamage: Object,
        title: String
    },
 
}
</script>



<style>
.doubleDamageContainer {
    width: 50%;
    height: 100%;
    margin-right: 5%;

}

.doubleDamage {
    display: grid;
    /* flex-wrap: wrap; */
    grid-template-areas: 'item item ' ;
    /* 
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr)); */
 
    
    padding:  8% 4% !important;

}
.doubleDamage .badge{
    width: 8vw;
    margin: 10px;
    max-width: 10vw;
    display: flex;
    justify-content: center;
    border-radius: 10px;
    padding: 3%;
}
</style>