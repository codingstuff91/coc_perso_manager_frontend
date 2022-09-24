<template>
  <Navbar/>
  <div class="container">
    <MobileMenu/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MobileMenu from '@/components/MobileMenu.vue';

export default {
  components: {
    Navbar,
    MobileMenu
  },
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  width: 100%;
  margin-top: 100px;
  /* border: 2px solid red; */
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #e9ecf1;
  /* color: #2c3e50; */
}

.container{
  padding-top: 70px;
  max-width: 80%;
  height: 100vh;
  margin: 0 auto;
  /* border: 2px solid blue; */
}
</style>
