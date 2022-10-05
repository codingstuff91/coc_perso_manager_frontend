<template>
    <div class="w-[95%] mx-auto mt-2">
        <div class="card">
            <h1 class="card-header">Capacités</h1>
            <div class="mt-2 bg-black p-2 rounded-lg" v-for="capacity in capacities" :key="capacity.id">
                <h2 class="text-white font-bold text-center mb-2 text-lg" >{{ capacity[0].name }}</h2>
                <div class="flex text-white columns-2 my-2" v-for="item in capacity" :key="item">
                    <p class="w-1/3 mt-2">Niv {{ item.level }}</p>
                    <p class="w-2/3 mt-2">{{ item.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            capacities : state => state.capacities
        }),
        data() {
            return {
                characterId: this.$route.params.id
            }
        },
        async created () {
            await this.$store.dispatch('getCharacterCapacities', { characterId : this.characterId })
        },
}
</script>
