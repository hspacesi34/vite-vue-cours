<template>
    <div class="flex flex-col items-center mt-10">
        <div>
            <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Event Binding Exo Compteur</h1>
            <div class="flex justify-center p-8 gap-12">
                <div class="tooltip tooltip-bottom">
                    <div class="tooltip-content">
                        <div class="animate-bounce text-orange-400 -rotate-5 text-2xl font-black">Clique sur la molette!</div>
                    </div>
                    <kbd v-on:click.middle="increment('minus')" class="kbd">▼</kbd>
                </div>
                <span>{{ counter }}</span>
                <div class="tooltip tooltip-bottom">
                    <div class="tooltip-content">
                        <div class="animate-bounce text-orange-400 -rotate-5 text-2xl font-black">Clique-droit!</div>
                    </div>
                    <kbd v-on:click.right="increment('plus')" class="kbd">▲</kbd>
                </div>
            </div>
        </div>
        <div>
            <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Petit TP</h1>
            <div>
                <h3>v-on:keyup ou @keyup</h3>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Saississez du texte</legend>
                    <input @input.key_up="(e) => value1 = e.target.value" type="text" class="input" placeholder="Type here" />
                    <p class="label">Le contenu de l'input est : {{ value1 }}</p>
                </fieldset>
            </div>
            <div>
                <h3>Modificateur d'événement</h3>
                <fieldset class="fieldset">
                    <legend class="fieldset-legend">Saississez du texte et appuyez sur la touche "Echap"</legend>
                    <input @keyup.esc="(e) => value2 = e.target.value" type="text" class="input" placeholder="Type here" />
                    <p class="label">La valeur confirmée par échap est : {{ value2 }}</p>
                </fieldset>
            </div>
            <div>
                <h3>Evenement @click</h3>
                <button @click="displayAlert" class="btn btn-secondary size-full">Afficher une alerte</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const counter = ref(0);

function increment(mode) {
    if (mode == 'minus') {
        counter.value-=11;
    } else {
        counter.value+=99;
    }
}

const value1 = ref('');
const value2 = ref('');

function displayAlert() {
    window.alert("test alert");
}
</script>