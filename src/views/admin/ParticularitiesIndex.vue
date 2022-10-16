<template>
    <div class="mx-auto w-[70%]">
        <h1 class="pt-5 text-center text-3xl text-bold">Gestion des traits</h1>
        <p class="clickable-card mt-4 text-center text-xl p-4 bg-white rounded-lg" v-for="particularity in particularities" :key="particularity.id">
            {{ particularity.name }}
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            particularities : state => state.particularities,
        }),
        async mounted () {
           await this.$store.dispatch('getAllParticularities');
        },
    }
</script>

<style lang="css" scoped>
.clickable-card{
    cursor: pointer;
}
</style>