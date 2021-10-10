<template>
   <div class="container">
      <h1>Welcome to our new site {{ user.email }}</h1>
      <form>
         <textarea
            class="postBox"
            name="post"
            cols="40"
            rows="5"
            placeholder="What's on your mind"
            v-model="body"
         />
         <button class="btn-primary" type="submit" @click.prevent="post">
            Post
         </button>
      </form>

      <div class="posts" v-for="post in posts" :key="post.id">
         <PostCard
            :author="post.author"
            :authorID="post.authorID"
            :body="post.body"
            :id="post.id"
         />
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { db } from '@/firebase';
import { v4 as uuid } from 'uuid';
import PostCard from '@/components/PostCard.vue';

export default {
   name: 'Home',
   data() {
      return {
         body: '',
         posts: [],
      };
   },
   methods: {
      async post() {
         const id = uuid();
         const postObj = {
            body: this.body,
            author: this.user.username,
            authorID: this.user.uid,
         };
         await db
            .collection('fires')
            .doc(id)
            .set(postObj);
         postObj.id = id;
         this.body = '';
         this.posts = [postObj, ...this.posts];
      },
   },
   async mounted() {
      const querySnap = await db.collection('fires').get();
      querySnap.forEach((doc) => {
         const post = doc.data();
         post.id = doc.id;
         this.posts.push(post);
      });
   },
   computed: {
      ...mapGetters({
         user: 'getUser',
      }),
   },
   components: {
      PostCard,
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

form {
   margin: 1rem;
   display: flex;
   flex-direction: column;
}

.postBox {
   outline: none;
   border: 2px solid black;
   padding: 1rem;
}

.btn-primary {
   background: rgba(100, 100, 255, 1);
   color: white;
   padding: 0.5rem;
   border: none;
   border-radius: 10px;
   margin-top: 1rem;
}

.btn-primary:hover {
   opacity: 0.7;
   cursor: pointer;
}

.posts {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
}
</style>
