<template>
    <div class="navbar bg-white h-20 border-b-2 border-slate-400 w-[100%] fixed">
        <div class="navbar-container bg-white w-[85%] mx-auto h-[100%] flex items-center justify-between">
            <div class="nav-logo">
                <img alt="main logo" src="../assets/coc_logo.jpg" class="w-[180px]">
            </div>
            <div class="nav-links">
                <router-link class="nav-link" to="/">Accueil</router-link>
                <router-link class="nav-link" to="/characters">Personnages</router-link>
                <router-link class="nav-link" to="/admin">Admin</router-link>
                <router-link  class="nav-link" to="/register" v-if="!isLogged">Inscription</router-link>
                <router-link  class="nav-link" to="/login" v-if="!isLogged">Connexion</router-link>
            </div>
            <img src="../assets/mobile_menu.png" class="w-14 md:hidden" @click="displayMobileMenu">
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            displayMobileMenu() {
                this.$store.dispatch('displayMobileMenu');
            }
        },
        computed: {
            isLogged() {
                return this.$store.getters.isLoggedIn 
            }
        }
    }
</script>

<style lang="css" scoped>

@media screen and (max-width: 768px) {
    .nav-links{
        display: none;
    }
}
</style>