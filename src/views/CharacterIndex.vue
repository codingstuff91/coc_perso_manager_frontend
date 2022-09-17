<template>
    <div>
        <h1>Personnages disponibles</h1>
    </div>
</template>

<script>
import CharacterService from '@/services/CharacterService';

    export default {
        methods: {
            getCharacters() {
                CharacterService.getCharacters().then(response => console.log(response.data))
            }
        },
        mounted () {
            this.getCharacters();
        },
    }
</script>

<style lang="css" scoped>
h1{
    margin: 20px 0;
    font-size: 18px;
}
</style>