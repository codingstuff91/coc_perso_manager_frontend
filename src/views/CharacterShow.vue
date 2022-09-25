<template>
    <div>
        <SubNavbar title="James BOND"/>

        <CharacterSkills/>

        <CharacterVitality/>

    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
import CharacterSkills from '../components/CharacterSkills.vue';
import CharacterVitality from '@/components/CharacterVitality.vue';

    export default {
    components: {
        SubNavbar,
        CharacterSkills,
        CharacterVitality
    }
}
</script>

<style lang="css" scoped>

</style>