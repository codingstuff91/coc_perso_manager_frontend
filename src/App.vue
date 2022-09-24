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
  background-color: #e9ecf1;
}

.container{
  padding-top: 70px;
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
}
</style>
