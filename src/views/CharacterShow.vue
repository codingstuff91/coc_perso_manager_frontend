<template>
    <div>
        <SubNavbar title="James BOND"/>

        <CharacterSkills/>

        <CharacterVitality/>

        <CharacterCombatSkills/>

    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
import CharacterSkills from '../components/CharacterSkills.vue';
import CharacterVitality from '@/components/CharacterVitality.vue';
import CharacterCombatSkills from '@/components/CharacterCombatSkills.vue';

    export default {
    components: {
        SubNavbar,
        CharacterSkills,
        CharacterVitality,
        CharacterCombatSkills
    }
}
</script>

<style lang="css" scoped>

</style>