<template>
    <div class="rounded-lg p-4 bg-slate-400 w-[90%] mx-auto drop-shadow-2xl">
        <div class="flex justify-center items-center w-[80%] mx-auto">
            <img v-if="characterInfos.gender == 'M'" src="../assets/man.png"  class="mr-4" width="55">
            <img v-else src="../assets/girl.png" class="mr-4" width="55">
            <h1 class="text-white text-xl font-bold">{{ characterInfos.name }}</h1>
        </div>
        <div class="flex justify-center">
            <button class="mt-4 p-2 rounded-lg w-[70%] bg-white font-bold text-lg drop-shadow-lg">
                <router-link class="nav-link" :to="`/character/${characterInfos.id}`">Consulter</router-link>
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            characterInfos: {
                type: Object
            },
        },
    }
</script>