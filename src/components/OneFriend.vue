<template>
<div class="card bg-base-100 w-96 shadow-sm">
  <div class="card-body">
    <h2 class="card-title">{{ id }}</h2>
    <ul class="list">
        <li class="list-row">
            Nom : {{ name }}
        </li>
        <li class="list-row">
            Tel : {{ phone }}
        </li>
        <li class="list-row">
            Email : {{ email }}
        </li>
        <li class="list-row">
            <span v-if="premium" class="badge bg-green-400">ami premium</span>
            <span v-else class="badge badge-error">ami pleb</span>
        </li>
    </ul>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    premium: {
        type: Boolean,
        required: true
    }
})
</script>