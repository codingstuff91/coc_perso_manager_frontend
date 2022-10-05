<template>
    <div class="w-[95%] mx-auto mt-2">
        <div class="card">
            <h1 class="card-header">Armes</h1>
            <h2 class="text-center text-white text-sm">Nom / Jet attaque / Jet de dégats</h2>
            <div class="mt-2 text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between" v-for="weapon in weapons" :key="weapon.id">
                <p>{{ weapon.name }}</p>
                <p>{{ weapon.attack_score }}</p>
                <p>{{ weapon.dm_score }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            weapons : state => state.character.weapons
        }),    
    }
</script>