<template>
    <div class="bg-white w-[100%] pt-2 h-20 flex justify-center items-center border-b-2 border-slate-400 mb-4">
        <img src="../assets/character.png" width="50">
        <h1 class="ml-4 font-bold text-lg">{{ title }}</h1>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
    },
}
</script>