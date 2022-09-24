<template>
    <SubNavbar title="Personnage"/>
    <Character />
</template>

<script>
import CharacterService from '@/services/CharacterService';
import Character from '@/components/Character.vue';
import SubNavbar from '@/components/SubNavbar.vue';

    export default {
    methods: {
        getCharacters() {
            CharacterService.getCharacters().then(response => console.log(response.data));
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

<style lang="css" scoped>
/* .title{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4c4bc4;
    padding : 10px;
    border-radius: 10px;
    box-shadow: 5px 5px 15px 5px #ABABAB;
    margin: 20px 0;
}

h1{
    font-size: 18px;
    color: #ffff;
    margin-top: 10px;
} */
</style>