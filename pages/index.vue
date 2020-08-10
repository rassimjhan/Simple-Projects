<template>
  <div>
    <PostForm />
    <Posts /> 
  </div>
</template>

<script>
import Posts from '~/components/Posts.vue';
import PostForm from '~/components/PostForm.vue';


export default {
  components: {
    Posts,
    PostForm,
 },
}
</script>

<style>

</style>

