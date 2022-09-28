<template>
    <div class="w-[95%] mx-auto">
        <div class="card">
            <h1 class="card-header">Caractéristiques</h1>
            <h2 class="text-center text-md text-white">(Valeur / Modificateur)</h2>
            <div class="columns-2 gap-4 flex justify-between">
                <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                    <p>{{ character.attributes[0].name }}</p>
                    <p>{{ character.attributes[0].pivot.value }} / {{ character.attributes[0].pivot.modificator }}</p>
                </div>
                <div class="flex justify-between mt-2 p-2 rounded-md text-white bg-black w-full">
                    <p>{{ character.attributes[1].name }}</p>
                    <p>{{ character.attributes[1].pivot.value }} / {{ character.attributes[1].pivot.modificator }}</p>
                </div>
            </div>
            <div class="columns-2 gap-2 flex justify-between">
                <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                    <p>{{ character.attributes[2].name }}</p>
                    <p>{{ character.attributes[2].pivot.value }} / {{ character.attributes[2].pivot.modificator }}</p>
                </div>
                <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                    <p>{{ character.attributes[3].name }}</p>
                    <p>{{ character.attributes[3].pivot.value }} / {{ character.attributes[3].pivot.modificator }}</p>
                </div>
            </div>
            <div class="columns-2 gap-2 flex justify-between">
                <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                    <p>{{ character.attributes[4].name }}</p>
                    <p>{{ character.attributes[4].pivot.value }} / {{ character.attributes[4].pivot.modificator }}</p>
                </div>
                <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                    <p>{{ character.attributes[5].name }}</p>
                    <p>{{ character.attributes[5].pivot.value }} / {{ character.attributes[5].pivot.modificator }}</p>
                </div>
            </div>
            <div class="card">
                <h1 class="card-header">Trait : {{ character.particularity.name }}</h1>
                <div class="mt-2 text-center text-sm text-white bg-black p-2 rounded-md w-full">
                    <p>{{ character.particularity.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        computed: mapState({
            character : state => state.character
        })
}
</script>