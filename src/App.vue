<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <AppHeader/>
  <main class="flex-grow">
    <HelloWorld msg="Counter component"/>
  </main>
  <AppFooter/>
</template>

<style scoped>
</style>
