<template>
    <div class="mx-auto w-[70%]">
        <h1 class="pt-5 text-center text-3xl text-bold">Gestion des capacités</h1>
        <p 
            class="clickable-card mt-4 text-center text-xl p-4 bg-white rounded-lg" 
            v-for="capacity in capacities" 
            :key="capacity.id"
            @click="editCapacity(capacity.id)">
            {{ capacity.name }}
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            capacities : state => state.capacities,
        }),
        methods: {
            editCapacity(capacityId) {
                this.$router.push('/admin/capacities/' + capacityId)
            }
        },
        async created () {
           await this.$store.dispatch('getAllCapacities');
        },
    }
</script>

<style lang="css" scoped>
.clickable-card{
    cursor: pointer;
}
</style>