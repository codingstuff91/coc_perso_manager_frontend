<template>
    <div>
        <SubNavbar :title="characterInfos.name"/>

        <CharacterSkills />

        <CharacterVitality />

        <CharacterCombatSkills />

        <CharacterWeapons />

        <CharacterCapacities />
    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
import CharacterSkills from '../components/CharacterSkills.vue';
import CharacterVitality from '@/components/CharacterVitality.vue';
import CharacterCombatSkills from '@/components/CharacterCombatSkills.vue';
import CharacterWeapons from '@/components/CharacterWeapons.vue';
import CharacterCapacities from '@/components/CharacterCapacities.vue';
import { mapState } from 'vuex'


    export default {
        components: {
            SubNavbar,
            CharacterSkills,
            CharacterVitality,
            CharacterCombatSkills,
            CharacterWeapons,
            CharacterCapacities,
        },
        computed: mapState({
            characterInfos : state => state.character
        }),
        async created () {
            await this.$store.dispatch('getCharacterInformations', { characterId : this.$route.params.id })
        },
}
</script>

<style lang="css" scoped>

</style>