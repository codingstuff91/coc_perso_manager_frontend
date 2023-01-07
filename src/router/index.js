import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from '../views/auth/Register.vue';
import Login from '../views/auth/Login.vue';
import CharacterIndex from '../views/CharacterIndex.vue';
import CharacterShow from '../views/CharacterShow.vue';
import AdminIndex from '../views/admin/AdminIndex.vue';
import ParticularitiesIndex from '../views/admin/ParticularitiesIndex.vue';
import ParticularitiesEdit from '../views/admin/ParticularitiesEdit.vue';
import CapacitiesIndex from '../views/admin/CapacitiesIndex.vue';
import store from '../store';

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
    component: CharacterIndex,
    beforeEnter : [checkUser]
  },
  {
    path: '/character/:id',
    name: 'character.show',
    component: CharacterShow,
    beforeEnter : [checkUser]
  },
  {
    path: '/admin',
    name: 'admin.index',
    component: AdminIndex
  },
  {
    path: '/admin/traits',
    name: 'traits.index',
    component: ParticularitiesIndex
  },
  {
    path: '/admin/traits/:id',
    name: 'traits.edit',
    component: ParticularitiesEdit
  },
  {
    path: '/admin/capacities',
    name: 'capacities.index',
    component: CapacitiesIndex
  },
]

function checkUser() {
  if(!localStorage.getItem('token')) {
    router.push('/login')
  }
}

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
