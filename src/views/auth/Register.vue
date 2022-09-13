<template>
    <div>
        <img src="../../assets/coc_logo.jpg" width="300">

        <h1>Créez votre compte dès à présent</h1>
        <BaseInput 
            type="text" 
            label="Nom utilisateur ou Pseudo" 
            v-model="user.name"
        />
        <!-- <p v-if="errors.user.name">{{ errors[user.name] }}</p> -->
        <BaseInput 
            type="text" 
            label="Adresse email" 
            v-model="user.email"
        />
        <BaseInput 
            type="text" 
            label="Mot de passe" 
            v-model="user.password"
        />
        <BaseInput 
            type="text" 
            label="Confirmation mot de passe" 
            v-model="user.confirm_password"
        />
        <BaseButton 
            text="Confirmer" 
            @click="submitRegister"
        />
        {{ errors }}
    </div>
</template>

<script>
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseButton from '@/components/forms/BaseButton.vue';
import axios from 'axios';

    export default {
        components: {
            BaseInput,
            BaseButton,
        },
        data() {
            return {
                user: {
                    name : '',
                    email : '',
                    password : '',
                    confirm_password : ''
                },
                errors : {}
            }
        },
        methods: {
            checkPassword(){
                if(this.user.password != this.user.confirm_password){
                    // throw "les mots de passe ne sont pas conformes !!";
                    alert('les mots de passe ne sont pas identiques !!');
                    return false;
                }
            },
            async submitRegister() {
                try {
                    await this.checkPassword();
                } catch (error) {
                    return alert(error)
                }

                axios.post('http://localhost:8000/api/auth/register', {
                    user : this.user
                }).then(response => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error.response.data.errors);
                    this.errors = error.response.data.errors;
                });
            }
        },
    }
</script>

<style lang="css" scoped>
img{
    margin: 20px auto;
}
</style>