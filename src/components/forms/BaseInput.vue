<template>
    <div class="form_input">
        <label v-if="label">{{ label }}</label>
        <input :type="$attrs" v-model="modelValue" @input="$emit('update:modelValue', $event.target.value)">
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                default: ''
            },
            modelValue : {
                type : [ String, Number ],
                default : ''
            }
        },
    }
</script>

<style lang="css" scoped>
    .form_input{
        margin: 1.2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .form_input label{
        font-size: 1.5em;
    }
    .form_input input{
        margin : 1em 0;
        border : none;
        padding : 0 1em;
        font-size: 1em;
        height: 2em;
        width: 25%;
        border-radius: 5px;
    }

    .form_input input:focus{
        border: 2px solid red;
    }

@media screen and (max-width: 400px) {
    .form_input input{
        margin : 0.7em 0;
        border : none;
        padding : 0 1em;
        font-size: 1em;
        height: 2.5em;
        width: 80%;
        border-radius: 5px;
    }
}
</style>