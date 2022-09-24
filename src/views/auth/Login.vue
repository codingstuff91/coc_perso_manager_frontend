<template>
    <h1 class="pt-10 font-bold text-2xl text-center">Connexion</h1>

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
    
    <p class="mt-2 text-center">Vous n'avez pas de compte ?</p>
    <p class="mt-4 text-center">Inscrivez vous ici : 
        <a href="/register" class="p-2 bg-slate-600 text-white rounded-lg">Inscription</a>
    </p> 
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