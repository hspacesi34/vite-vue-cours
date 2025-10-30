<template>
<div class="flex flex-col items-center mt-4">
    <h1>Simple requête HTTP GET</h1>
    <div class="flex flex-col w-150">
        <h2 class="mb-2">Les Pokémon :</h2>
        <div v-if="pokemons.length > 0" class="flex flex-wrap w-full">
            <div class="badge badge-primary m-1" v-for="(pokemon, index) in pokemons" :key="index">{{ pokemon.name }}</div>
        </div>
        <div v-else class="text-center">
            <span class="loading loading-spinner loading-xl"></span>
        </div>
    </div>
    <div class="divider"></div>
    <div class="flex flex-col w-150">
        <h2 class="mb-2">Météo Toulouse :</h2>
        <ul v-if="meteoInfos.length > 0" class="list bg-base-100 rounded-box shadow-md w-full">
            <li class="list-row" v-for="(info, index) in meteoInfos" :key="index"><p>{{ info.name }}: <strong>{{ info.value }}</strong></p></li>
        </ul>
        <div v-else-if="errorMessage.length > 0">
            <p>Erreur de fetch de l'API</p>
        </div>
        <div v-else class="text-center">
            <span class="loading loading-spinner loading-xl"></span>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const pokemons = ref([]);
const meteoInfos = ref([]);
const errorMessage = ref('');

onMounted(async () => {
    try {
        const fetchPokemonApi = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
        const reponsePokemonApi = await fetchPokemonApi.json();
        pokemons.value = reponsePokemonApi.results;
    
        const fetchMeteoApi = await fetch('https://prevision-meteo.ch/services/json/toulouse');
        const reponseMeteoApi = await fetchMeteoApi.json();
        meteoInfos.value.push({name:'Température min',value:reponseMeteoApi.fcst_day_0.tmin+'°C'}, {name:'Température max',value:reponseMeteoApi.fcst_day_0.tmax+'°C'}, {name:'Température actuelle',value:reponseMeteoApi.current_condition.tmp+'°C'}, {name:'Condition météo',value:reponseMeteoApi.current_condition.condition});
    } catch (error) {
        errorMessage.value = error;
    }
})
</script>