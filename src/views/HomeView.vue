<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/coc_logo.jpg">
    <h1>Gérez simplement vos personnages de jeu de roles</h1>
    <h2>Pour le jeu de roles "Chroniques oubliées Contemporain"</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="css" scoped>
img{
  width: 300px;
  height: auto;
  margin: 0 auto;
}

h1{
  margin: 20px 0;
}

</style>
