export const state = () => ({
   posts: [],
});

export const mutations = {
  setPosts(state, posts) {
      state.posts = posts;
  },
  createPost(state, newPost) {
      state.posts.unshift(newPost)
  }
};

export const getters = {
    allPosts: state => state.posts,
    postCount: (state, getters) => getters.validPosts.length,
    validPosts(state) {
        return state.posts.filter(p => {
            return p.title && p.body
        })
    }
};

export const actions = {
  async fetchPosts({ commit }) {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await res.json();

      commit("setPosts", posts);
  }
};
