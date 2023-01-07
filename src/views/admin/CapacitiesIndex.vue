<template>
    <div class="mx-auto w-[70%]">
        <h1 class="pt-5 text-center text-3xl text-bold">Gestion des capacités</h1>
        <CapacityCreate v-if="addCapacity" />
        <div class="flex justify-center">
            <button 
                class="btn"
                @click="addCapacity = !addCapacity"
            >
                Ajouter une capacité
            </button>
        </div>
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
import CapacityCreate from '@/views/admin/CapacityCreate.vue';
import BaseButton from '@/components/forms/BaseButton.vue';

    export default {
        data() {
            return {
                addCapacity: false
            }
        },
        components: {
            CapacityCreate,
        },
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