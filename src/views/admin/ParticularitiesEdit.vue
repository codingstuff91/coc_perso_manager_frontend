<template>
    <div class="mx-auto w-[70%]">
        <h1 class="pt-5 text-center text-3xl text-bold">Edition du trait</h1>
        <BaseInput         
            type="text" 
            label="Nom" 
            v-model="particularity.name"
        />

        <BaseButton 
            text="Mettre à jour" 
            @click="updateParticularity"
        />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseInput from '@/components/forms/BaseInput.vue'
import BaseButton from '@/components/forms/BaseButton.vue'

    export default {
        data() {
            return {
                particularityData : {
                    name : '',
                    description : ''
                }
            }
        },
        components: {
            BaseInput,
            BaseButton
        },
        computed: mapState({
            particularity : state => state.particularity
        }),
        methods: {
            async updateParticularity() {
                await this.$store.dispatch('updateParticularity', { particularity : this.particularity });
                this.$router.push('/admin/traits');
            }
        },
        async mounted () {
            await this.$store.dispatch('getParticularity', { particularityId : this.$route.params.id });
        },
    }
</script>

<style lang="scss" scoped>

</style>