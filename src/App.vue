<template>
   <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="!user" to="/login">Login</router-link>
      <router-link v-if="!user" to="/register">Register</router-link>
      <a v-if="user" href="javascript:void(0)" @click="logout">Logout</a>
   </div>
   <router-view />
</template>

<script>
import firebase from '@/firebase';
import { mapMutations, mapGetters } from 'vuex';
import store from '@/store';

firebase.auth().onAuthStateChanged((user) => {
   if (user) {
      const userObj = {
         email: user.email,
         username: user.displayName,
         uid: user.uid,
      };
      store.commit('user', userObj);
   } else {
      store.commit('user', null);
   }
});

export default {
   name: 'App',
   methods: {
      ...mapMutations(['user']),
      async logout() {
         try {
            await firebase.auth().signOut();
            this.$router.replace({ name: 'Login' });
         } catch (error) {
            console.error(error);
         }
      },
   },
   computed: {
      ...mapGetters({ user: 'getUser' }),
   },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
   margin: 0;
   padding: 0;
}
body {
   font-family: 'Roboto', sans-serif;
}

a {
   margin-left: 1rem;
}
</style>
