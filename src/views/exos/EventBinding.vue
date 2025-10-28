<template>
    <div class="flex justify-center mt-10">
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
</script>