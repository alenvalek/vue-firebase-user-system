<template>
   <div class="container">
      <h2 class="left">
         {{ body }}
      </h2>
      <p class="right">{{ author }}</p>
      <i v-if="authorID == user.uid">&times;</i>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'PostCard',
   props: {
      author: String,
      body: String,
      id: String,
      authorID: String,
   },
   computed: {
      ...mapGetters({ user: 'getUser' }),
   },
};
</script>

<style scoped>
.container {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: rgba(100, 100, 255, 1);
   padding: 2rem;
   border-radius: 1rem;
   color: white;
   width: 50%;
   margin: 1rem 0;
}

.left {
   margin-right: auto;
}

.right {
   margin-left: auto;
}
</style>
