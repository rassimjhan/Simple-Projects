<template>
    <div class="container">
        <h2>Create Post</h2>
        <form @submit.prevent="submit">
            <b-input type="text" placeholder="title" v-model="title" class="mb-2"></b-input>
            <b-input type="text" placeholder="body" v-model="body" class="mb-2"></b-input>
            <b-button type="submit">Create Post</b-button>
        </form>        
        <hr>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    name: "PostForm",
    data() {
        return {
            title: '',
            body: '',
        }
    },
    methods: {
        submit() {
            this.createPost({
                title: this.title,
                body: this.body,
                id: Date.now(),
            });
            this.title = this.body = '';
        },
         ...mapMutations({
        createPost: 'posts/createPost'
    })
    },
     middleware: ['auth'],
}
</script>

<style>

</style>