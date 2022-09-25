<template>
    <div>
        <SubNavbar title="James BOND"/>

        <CharacterSkills/>

        <CharacterVitality/>

        <CharacterCombatSkills/>

        <CharacterWeapons/>
    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
import CharacterSkills from '../components/CharacterSkills.vue';
import CharacterVitality from '@/components/CharacterVitality.vue';
import CharacterCombatSkills from '@/components/CharacterCombatSkills.vue';
import CharacterWeapons from '@/components/CharacterWeapons.vue';

    export default {
    components: {
    SubNavbar,
    CharacterSkills,
    CharacterVitality,
    CharacterCombatSkills,
    CharacterWeapons,
}
}
</script>

<style lang="css" scoped>

</style>