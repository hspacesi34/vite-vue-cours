<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
function counter(e) {
  count.value++;
  console.log(e);
}
</script>

<template>
  <h1 class="mb-4 mt-4">{{ msg }}</h1>
  <div>
    <button class="btn btn-primary w-38" type="button" @click="(e) => counter(e)">count is {{ count }}</button>
  </div>
</template>

<style scoped>

</style>
