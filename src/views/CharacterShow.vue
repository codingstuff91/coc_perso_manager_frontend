<template>
    <div>
        <SubNavbar title="James BOND"/>
        <div class="w-[95%] mx-auto">
            <div class="card">
                <h1 class="card-header">Caractéristiques</h1>
                <div class="columns-2 gap-4 flex justify-between">
                    <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                        <p>Force</p>
                        <p>18 / +2</p>
                    </div>
                    <div class="flex justify-between mt-2 p-2 rounded-md text-white bg-black w-full">
                        <p>Dextérité</p>
                        <p>10 / 0</p>
                    </div>
                </div>
                <div class="columns-2 gap-2 flex justify-between">
                    <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                        <p>Constitution</p>
                        <p>18 / +2</p>
                    </div>
                    <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                        <p>Intelligence</p>
                        <p>10 / 0</p>
                    </div>
                </div>
                <div class="columns-2 gap-2 flex justify-between">
                    <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                        <p>Perception</p>
                        <p>18 / +2</p>
                    </div>
                    <div class="flex justify-between mt-2 p-2 rounded-md text-sm text-white bg-black w-full">
                        <p>Charisme</p>
                        <p>10 / 0</p>
                    </div>
                </div>
            </div>
            <div class="card mt-2">
                <h1 class="card-header">Vitalité / Chance</h1>
                <div class="columns-3">
                    <p class="text-center text-md text-white bg-black p-2">PV : 10</p>
                    <p class="text-center text-md text-white bg-black p-2">DV : 1D10</p>
                    <p class="text-center text-md text-white bg-black p-2">PC : 4</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SubNavbar from '@/components/SubNavbar.vue';
    export default {
    components: { SubNavbar }
}
</script>

<style lang="css" scoped>

</style>