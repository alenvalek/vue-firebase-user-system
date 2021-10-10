import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import store from '@/store';

const routes = [
   {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: (to, from, next) => {
         const auth = store.getters['getUser'];
         if (to.name === 'Home' && !auth) {
            next({ name: 'Login' });
         } else {
            next();
         }
      },
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
   },
   {
      path: '/register',
      name: 'Register',
      component: Register,
   },
];

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes,
});

export default router;
