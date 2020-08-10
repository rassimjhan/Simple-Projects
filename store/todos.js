
export const state = () => ({
    todos: []
  })

  export const getters = {
    allTodos: (state) => state.todos 
}

  export const mutations = {

    setTodos(state, todos) {
        state.todos = todos
    },

    newTodo: (state, todo) => state.todos.unshift(todo),

    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),

    updateTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);

        if (index !== -1) {
            state.todos.splice(index, 1, updTodo);
        }
    }

}

  export const actions = {

    async fetchTodos({ commit }) {
        const response = await this.$axios.get('https://jsonplaceholder.typicode.com/todos');
        
        commit('setTodos', response.data);
        
    },

    async addTodo({ commit }, title) {
        const response = await this.$axios.post('https://jsonplaceholder.typicode.com/todos', { title, completed: false });

        commit('newTodo', response.data);
    },

    async deleteTodo({ commit }, id) {
        await this.$axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id);
    },

    async updateTodo({ commit }, updTodo) {
        const response = await this.$axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`, updTodo
        );

        console.log(response.data);
        commit('updateTodo', response.data);
    }
}