<template>
    <div class="mx-auto w-full bg-white rounded-lg mt-4">
        <h1 class="text-center text-2xl text-bold">Nouvelle capacité</h1>
        <BaseInput label="Titre" v-model="title" />
        <BaseInput label="Niveau" type="number" v-model="level" />
        <BaseTextArea label="Description"/>
        <BaseButton text="Ajouter"/>
    </div>
</template>

<script>
import BaseButton from '@/components/forms/BaseButton.vue';
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseTextArea from '@/components/forms/BaseTextArea.vue';
    export default {
        components: {
            BaseButton,
            BaseInput,
            BaseTextArea
        },
        data() {
            return {
                title: '',
                level : 0
            }
        },
        methods: {
            storeCapacity() {
                alert('click ok')
            }
        },
    }
</script>

<style lang="css" scoped>
.clickable-card{
    cursor: pointer;
}
</style>