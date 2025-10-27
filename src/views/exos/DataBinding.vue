<template>
    <div class="flex justify-center mt-10">
        <div class="card bg-base-100 w-96 shadow-sm">
            <figure class="px-10 pt-10">
                <img
                :src="leVraiNaruto._imgProfile"
                alt="le vrai Naruto"
                class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ leVraiNaruto._name }}</h2>
                <input :value="leVraiNaruto._name" type="text" name="" class="input">
                <p>Âge : {{ leVraiNaruto._age }} ans</p>
                <p>Âge + 10 : {{ leVraiNaruto._age + 10 }} ans</p>
                <p>NB Fétiche : {{ leVraiNaruto._nbFetiche }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
class UserFou {
    constructor(name, imgProfile, age, nbFetiche){
        this._name = name;
        this._imgProfile = imgProfile;
        this._age = age;
        this._nbFetiche = nbFetiche;
    }
}

const imageUser = 'https://i.chzbgr.com/full/9106857728/hF9556D7F';
const leVraiNaruto = new UserFou('Le vrai Naruto', imageUser, 30, 1919118159336);
</script>