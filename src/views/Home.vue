<template>
   <div class="container">
      <h1>Welcome to our new site {{ user.email }}</h1>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'Home',
   data() {
      return {
         email: '',
         password: '',
      };
   },
   computed: {
      ...mapGetters({
         user: 'getUser',
      }),
   },
};
</script>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
}

.form {
   display: flex;
   flex-direction: column;
   margin: 1rem;
}

input,
button {
   margin-bottom: 1rem;
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
