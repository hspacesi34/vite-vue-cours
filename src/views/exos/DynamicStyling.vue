<template>
<div class="flex flex-col justify-center items-center gap-4 mt-10">
    <div class="flex gap-10">
        <div :style="dynamicStyleCard1" @click="changeColorCard1" class="card w-20 bg-base-100 card-xs shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Carte 1</h2>
            </div>
        </div>
        <div :style="dynamicStyleCard2" @click="changeColorCard2" class="card w-20 bg-base-100 card-xs shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Carte 2</h2>
            </div>
        </div>
    </div>
    <div class="flex gap-10">
        <div :class="{'exo-card1': isActive1, '': !isActive1}" @click="toggleClass1" class="card w-20 bg-base-100 card-xs shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Carte 3</h2>
            </div>
        </div>
        <div :class="{'exo-card2': isActive2, '': !isActive2}" @click="toggleClass2" class="card w-20 bg-base-100 card-xs shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Carte 4</h2>
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-2">
        <h1 class="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-center">TP Dynamic styling</h1>
        <input type="text" class="input w-full" v-model="inputClass">
        <h2 :class="{'maClasseHello':isClasseHello, '':!isClasseHello}" :style="firstH2Style">Hello World (class dynamique)</h2>
        <input type="text" class="input w-full" v-model="cssColor">
        <h2 :class="{'maClasseWorld':isClasseWorld, '':!isClasseWorld}" :style="cssStyle">Hello World (couleur dynamique)</h2>
        <button @click="changeFirstH2" class="btn">Afficher/Cacher 1er titre</button>
    </div>
</div>
</template>

<script setup>
import { ref, watch } from 'vue';

const dynamicStyleCard1 = ref({
    backgroundColor: "cyan"
})
const dynamicStyleCard2 = ref({
    backgroundColor: "magenta"
})

function changeColorCard1() {
    if (dynamicStyleCard1.value.backgroundColor == "red") {
        dynamicStyleCard1.value.backgroundColor = "cyan";
    } else {
        dynamicStyleCard1.value.backgroundColor = "red";
    }
}
function changeColorCard2() {
    if (dynamicStyleCard2.value.backgroundColor == "red") {
        dynamicStyleCard2.value.backgroundColor = "magenta";
    } else {
        dynamicStyleCard2.value.backgroundColor = "red";
    }
}
const isActive1 = ref(false);
const isActive2 = ref(false);

function toggleClass1() {
    if (!isActive1.value) {
        isActive1.value = true;
    } else {
        isActive1.value = false;
    }
}
function toggleClass2() {
    if (!isActive2.value) {
        isActive2.value = true;
    } else {
        isActive2.value = false;
    }
}

const isClasseHello = ref(false);
const isClasseWorld = ref(false);
const cssColor = ref('');
const cssStyle = ref({
    backgroundColor: cssColor
});
const firstH2Style = ref({
    display: 'block'
});
const inputClass = ref('');
watch(inputClass, (newValue) => {
    if (newValue == 'hello') {
        isClasseHello.value = true;
    } else {
        isClasseHello.value = false;
    }
    if (newValue == 'world') {
        isClasseWorld.value = true;
    } else {
        isClasseWorld.value = false;
    }
})

function changeFirstH2() {
    if (firstH2Style.value.display == 'none') {
        firstH2Style.value.display = 'block';
    } else {
        firstH2Style.value.display = 'none';
    }
}
</script>

<style scoped>
    .exo-card1 {
        background-color: red;
    }
    .exo-card2 {
        background-color: red;
    }
    .maClasseHello {
        background-color: blueviolet;
    }
    .maClasseWorld {
        background-color: greenyellow;
    }
</style>