<template>
    <div>
        <SubNavbar title="James BOND"/>

        <CharacterSkills/>

        <CharacterVitality/>

        <CharacterCombatSkills/>

        <CharacterWeapons/>

        <CharacterCapacities/>
    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
import CharacterSkills from '../components/CharacterSkills.vue';
import CharacterVitality from '@/components/CharacterVitality.vue';
import CharacterCombatSkills from '@/components/CharacterCombatSkills.vue';
import CharacterWeapons from '@/components/CharacterWeapons.vue';
import CharacterCapacities from '@/components/CharacterCapacities.vue';

    export default {
        components: {
            SubNavbar,
            CharacterSkills,
            CharacterVitality,
            CharacterCombatSkills,
            CharacterWeapons,
            CharacterCapacities,
        }
}
</script>

<style lang="css" scoped>

</style>