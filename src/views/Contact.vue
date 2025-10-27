<template>
    CONTACT
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route.name);
console.log(router.currentRoute.value.name);


</script>