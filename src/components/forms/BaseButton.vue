<template>
    <button class="p-4 bg-slate-600 text-white rounded-lg w-[100%] text-xl mt-4">
        {{ text }}
    </button>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                default: ''
            },
        },
    }
</script>