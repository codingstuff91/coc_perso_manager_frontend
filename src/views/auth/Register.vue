<template>
    <div>
        <h1 class="pt-10 font-bold text-2xl text-center">Inscrivez-vous</h1>
        <BaseInput 
            type="text" 
            label="Nom utilisateur ou Pseudo" 
            v-model="name"
        />
        <p class="error_message" v-if="errors.name">{{ errors.name }}</p>

        <BaseInput 
            type="text"
            label="Adresse email" 
            v-model="email"
        />
        <p class="error_message" v-if="errors.email">{{ errors.email }}</p>

        <BaseInput 
            type="password" 
            label="Mot de passe" 
            v-model="password"
        />
        <p class="error_message" v-if="errors.password">{{ errors.password }}</p>

        <BaseInput 
            type="password" 
            label="Confirmation mot de passe" 
            v-model="confirm_password"
        />
        <p class="error_message" v-if="errors.password_confirm">{{ errors.password_confirm }}</p>

        <BaseButton 
            text="Confirmer" 
            @click="submitRegister"
        />
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
                name : '',
                email : '',
                password : '',
                confirm_password : '',
                errors : {}
            }
        },
        methods: {
            checkPassword(){
                return new Promise((resolve, reject) => {
                    if(this.password != this.confirm_password){
                        reject("les mots de passe ne sont pas conformes !!");
                    }
                    resolve();
                })
            },
            async submitRegister() {
                this.errors = {};

                this.checkPassword().then(()=>{
                    axios.post('http://localhost:8000/api/auth/register', {
                        name : this.name,
                        email : this.email,
                        password : this.password,
                    }).then(response => {
                        console.log(response.data)
                    }).catch(error => {
                        for (const property in error.response.data.errors) {
                            this.errors[property] = error.response.data.errors[property][0];
                        }
                    })
                }).catch(error => {
                    this.errors['password_confirm'] = error
                });
            }
        },
    }
</script>

<style lang="css" scoped>
.error_message{
    margin: 10px auto;
    color : red;
}
</style>