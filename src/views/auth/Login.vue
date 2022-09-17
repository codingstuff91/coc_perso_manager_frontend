<template>
    <h1>Connexion</h1>

    <BaseInput 
        type="text" 
        label="Adresse email" 
        v-model="email"
    />

    <BaseInput 
        type="password" 
        label="Mot de passe" 
        v-model="password"
    />

    <BaseButton 
            text="Connexion" 
            @click="submitLogin"
        />
    
    <small class="subtitle">Pas encore de compte ? Inscrivez vous ici : <button><a href="/register">Inscription</a></button></small>
</template>

<script>
import AuthService from '@/services/AuthService';
import BaseInput from '@/components/forms/BaseInput.vue';
import BaseButton from '@/components/forms/BaseButton.vue';

    export default {
        data() {
            return {
                email: '',
                password : ''
            }
        },
        components: {
            BaseInput,
            BaseButton
        },
        methods: {
            submitLogin() {
                AuthService.login({
                    email : this.email, 
                    password : this.password})
                .then(({data}) => {
                    localStorage.setItem('token', data);
                })
            }
        },
    }
</script>

<style lang="css" scoped>
h1{
    margin:30px auto;
}
.subtitle{
    display: block;
    margin: 10px auto;
}
</style>