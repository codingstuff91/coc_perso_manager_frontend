<template>
    <div>
        <h1 class="pt-5 text-center text-3xl text-bold">Administration</h1>
        <div class="flex justify-between items-center w-[50%] mx-auto mt-12">
            <div class="clickable-card bg-slate-400 p-4 rounded-lg" @click="redirectTo('/admin/traits')">
                <h2 class="text-2xl text-white">Traits</h2>
            </div>
            <div class="bg-slate-400 p-4 rounded-lg">
                <h2 class="text-2xl text-white">Capacités</h2>
            </div>
            <div class="bg-slate-400 p-4 rounded-lg">
                <h2 class="text-2xl text-white">Profils</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            redirectTo(path) {
                this.$router.push(path)
            }
        },
    }
</script>

<style scoped>
.clickable-card{
    cursor: pointer;
}
</style>