<template>
    <div class="form_input my-6 mx-auto w-[100%] flex flex-col align-items">
        <label v-if="label" class="text-xl font-bold text-center">
            {{ label }}
        </label>
        <input
            class="mt-1 h-4 p-4 rounded-lg focus:outline-none focus:ring focus:ring-stale-400"
            :type="$attrs.type" 
            v-model="modelValue" 
            @input="$emit('update:modelValue', $event.target.value)"
        >
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