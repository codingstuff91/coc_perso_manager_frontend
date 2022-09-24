<template>
    <div class="navbar bg-white h-20 border-b-4 border-slate-400 w-[100%] fixed">
        <div class="navbar-container bg-white w-[85%] mx-auto h-[100%] flex items-center justify-between">
            <div class="nav-logo">
                <img alt="main logo" src="../assets/coc_logo.jpg" class="w-[180px]">
            </div>
            <div class="nav-links sm:hidden">
                <router-link to="/">Accueil</router-link>
                <router-link to="/characters">Personnages</router-link>
                <router-link to="/register">Inscription</router-link>
                <router-link to="/login">Connexion</router-link>
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
    }
</script>

<style lang="css" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.nav-links{
    display: flex;
    width: 350px;
    justify-content: space-between;
}
.nav-links a{
    text-decoration: none;
}

@media screen and (max-width: 400px) {
    .navbar-container{
        max-width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        background-color: #ffff;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav-links{
        display: none;
    }
}
</style>