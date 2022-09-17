import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import CharacterIndex from '../views/CharacterIndex.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/characters',
    name: 'characters',
    component: CharacterIndex
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router.beforeEach((to, from, next)=>{
  // if(to == 'register' || to == 'login') {
  //   next();
  // }

  // if(!localStorage.getItem('token')) {
  //   router.push('login');
  // }

// });

export default router
