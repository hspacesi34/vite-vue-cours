<template>
    <div class="flex flex-col items-center gap-4 mt-4">
        <h1
            class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center">
            WatchList</h1>
        <input type="text" class="input" placeholder="Entrez le nom d'un film" v-model="input">
        <button class="btn btn-secondary" @click="() => { input.length > 0 ? movies.push(input) : ''; input = '' }">Ajouter
            à votre liste</button>
        <div class="divider"></div>
        <p v-if="!movies.length > 0">Pas encore de films dans votre liste, veuillez en ajouter un!</p>
        <ul v-if="movies.length > 0" v-for="(movie, index) in movies">
            <li>{{ movie }}<button class="btn ml-2" @click="movies.splice(index, 1)">Delete</button></li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const input = ref('');
const movies = ref([]);
</script>