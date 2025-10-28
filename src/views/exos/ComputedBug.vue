<template>
    <div class="w-full max-w-md mx-auto mt-10">
        <h1
            class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center">
            Exo Computed bug</h1>
        <div class="flex justify-center p-8 gap-12">
            <kbd v-on:click="reduire" class="kbd">▼</kbd>
            <span>{{ counter }}</span>
            <kbd v-on:click="augmenter" class="kbd">▲</kbd>
        </div>
        <p class="text-center">Résultat de la fonction afficherNameUser(): {{ afficherNameUser }}</p>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const counter = ref(0);
const nameUser = ref('test');

function reduire() {
    counter.value-=10;
}
function augmenter() {
    counter.value+=10;
}

const afficherNameUser = computed(() => {
    console.log("la fonction vient d'etre executée");
    if (nameUser.value != '') {
        console.log('User connecté');
    } else {
        console.log('User Offline');
    }
    return nameUser;
})

// function afficherNameUser() {
//     console.log("la fonction vient d'etre executée");
//     if (nameUser.value != '') {
//         console.log('User connecté');
//     } else {
//         console.log('User Offline');
//     }
//     return nameUser;
// }
</script>