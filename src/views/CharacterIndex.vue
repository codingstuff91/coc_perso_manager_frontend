<template>
    <SubNavbar title="Personnages"/>
    <Character 
        class="my-2" 
        v-for="character in characters" :key="character.id"
        :characterInfos="character"
    />
</template>

<script>
import CharacterService from '@/services/CharacterService';
import Character from '@/components/Character.vue';
import SubNavbar from '@/components/SubNavbar.vue';

    export default {
        data() {
            return {
                characters : []
            }
        },
        methods: {
            getCharacters() {
                CharacterService.getCharacters().then(response => { 
                    this.characters = response.data;
                });
            }
        },
        mounted() {
            this.getCharacters();
        },
        components: {
            Character,
            SubNavbar
        }
}
</script>