<template>
    <div class="m-4">
        <span class="m-4">
            {{ number }}
        </span>
        <button @click="number++" class="btn">Incrémenter</button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const number = ref(0);

watch(number, (newNumber) => {
    if (newNumber == 7) {
        number.value = 0;
    }
})
</script>