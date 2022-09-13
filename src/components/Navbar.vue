<template>
    <div class="navbar">
        <div class="navbar-container">
            <div class="nav-logo">
                <img alt="main logo" src="../assets/logo.png" width="40" height="40">
            </div>
            <div class="nav-links">
                <router-link to="/">Accueil</router-link>
                <router-link to="/register">Inscription</router-link>
                <router-link to="/login">Connexion</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="css" scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.navbar{
    /* background-color: red; */
    height: 65px;
    border-bottom: 2px solid lightgray;
    background-color: #ffff;
    position: fixed;
    width: 100%;
}
.navbar-container{
    max-width: 80%;
    padding: 0 20px;
    margin: 0 auto;
    background-color: #ffff;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.nav-links{
    display: flex;
    width: 250px;
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
}
</style>