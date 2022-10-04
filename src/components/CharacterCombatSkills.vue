<template>
    <div class="w-[95%] mx-auto mt-2">
        <div class="card">
            <h1 class="card-header">Combat</h1>
            <div class="columns-2 gap-2 mt-2">
                <div class="text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between">
                    <p>Initiative</p>
                    <p>{{ characterInfos.attributes[1].pivot.value }}</p>
                </div>
                <div class="text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between">
                    <p>Att au contact</p>
                    <p>{{ formatModificator(characterInfos.attributes[0].pivot.modificator) }}</p>
                </div>
            </div>
            <div class="columns-2 gap-2 mt-2">
                <div class="text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between">
                    <p>Att à dist</p>
                    <p>{{ formatModificator(characterInfos.attributes[1].pivot.modificator) }}</p>
                </div>
                <div class="text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between">
                    <p>Att mentale</p>
                    <p>10</p>
                </div>
            </div>
            <h2 class="card-header mt-2">Défense</h2>
            <div class="mt-2 text-center text-sm text-white bg-black p-2 rounded-md w-full flex justify-between">
                <p>Base : {{ parseInt(10) + parseInt(characterInfos.attributes[1].pivot.modificator) }}</p>
                <p>Bonus : +2</p>
                <p>Total : 12</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            characterInfos : state => state.character
        }),  
        methods: {
            formatModificator(value) {
                return value > 0 ? `+${value}` : value;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>