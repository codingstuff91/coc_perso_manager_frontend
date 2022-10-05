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
        data() {
            return {
                characterId: this.$route.params.id
            }
        },
        computed: mapState({
            characterInfos : state => state.character
        }),
        async created () {
            await this.$store.dispatch('getCharacterInformations', { characterId : this.characterId })
            await this.$store.dispatch('getCharacterCapacities', { characterId : this.characterId })
        },
}
</script>

<style lang="css" scoped>

</style>