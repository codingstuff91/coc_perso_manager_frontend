<template>
    <div id="mobile-menu" v-if="mobileMenu">
        <router-link to="/">Accueil</router-link>
        <router-link to="/characters">Personnages</router-link>
        <router-link to="/register">Inscription</router-link>
        <router-link to="/login">Connexion</router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'

    export default {
        data() {
            return {
                
            }
        },
        computed: mapState({
            mobileMenu : state => state.mobileMenu
        }),
    }
</script>

<style lang="css" scoped>
#mobile-menu{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#mobile-menu a{
    margin: 20px auto;
}
</style>