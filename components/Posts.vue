<template>
  <div class="container">
    <h3>Count of posts: {{postCount}}</h3>
    <div class="post" v-for="post in validPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Posts',
    computed: {
    ...mapGetters({
        allPosts: 'posts/allPosts',
        validPosts: 'posts/validPosts',
        postCount: 'posts/postCount',
   })
 },
    methods: {
        ...mapActions({
            fetchPosts: 'posts/fetchPosts',
        })
    },
    async mounted() {
        this.fetchPosts();
    }
}
</script>

<style>
.container {
  text-align: center;
  margin: 60px auto;
  width: 400px;
}

.post {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 1rem;
}
</style>