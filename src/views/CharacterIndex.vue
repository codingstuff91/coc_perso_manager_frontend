<template>
    <SubNavbar title="Personnages"/>
    <Character 
        class="my-2" 
        v-for="character in characters" :key="character.id"
        :characterInfos="character"
    />
</template>

<script>
import { mapState } from 'vuex'

import Character from '@/components/Character.vue';
import SubNavbar from '@/components/SubNavbar.vue';

    export default {
        data() {
            return {
                userId : localStorage.getItem('userId')
            }
        },
        computed: mapState({
            characters : state => state.characters,
            userId : state => state.user.id
        }),
        async mounted() {
            await this.$store.dispatch('getCharacters', { userId : this.userId })
        },
        components: {
            Character,
            SubNavbar
        }
}
</script>