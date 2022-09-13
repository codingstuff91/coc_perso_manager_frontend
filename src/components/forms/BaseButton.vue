<template>
    <button>
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

<style lang="css" scoped>
button{
    border-radius: 10px;
    height: 2em;
    font-size: 1.2em;
    width: 30%;
    background-image: linear-gradient(90deg, #3454FB 0%, #7636FF 100%);
    color: #ffff;
    cursor: pointer;
}

@media screen and (max-width: 400px) {
    button{
        border-radius: 10px;
        height: 2.5em;
        font-size: 1.2em;
        width: 80%;
        background-image: linear-gradient(90deg, #3454FB 0%, #7636FF 100%);
        color: #ffff;
        cursor: pointer;
    }
}
</style>