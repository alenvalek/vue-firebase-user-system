<template>
   <div class="container">
      <h1>Welcome to our site</h1>
      <form class="form">
         <input v-model="email" type="email" placeholder="Email" />
         <input v-model="password" type="password" placeholder="Password" />
         <button type="submit" @click.prevent="register" class="btn-primary">
            Register
         </button>
      </form>
      <div class="info">
         Already have an account?
         <router-link :to="{ name: 'Login' }">Sign In</router-link>
      </div>
   </div>
</template>

<script>
import firebase from '@/firebase';
export default {
   name: 'Home',
   data() {
      return {
         email: '',
         password: '',
      };
   },
   methods: {
      async register() {
         try {
            await firebase
               .auth()
               .createUserWithEmailAndPassword(this.email, this.password);
            console.log('User kreiran');
         } catch (error) {
            console.error(error);
         }
      },
   },
};
</script>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   min-height: 90vh;
}

.form {
   display: flex;
   flex-direction: column;
   margin: 1rem;
}

input,
button {
   margin-bottom: 2rem;
}

.btn-primary {
   background: rgba(100, 100, 255, 1);
   color: white;
   padding: 0.5rem;
   border: none;
   border-radius: 10px;
}

.btn-primary:hover {
   opacity: 0.7;
   cursor: pointer;
}

input {
   border: none;
   outline: none;
   border-bottom: 1px solid black;
   font-size: 2rem;
   transition: all 1s ease;
}
</style>
