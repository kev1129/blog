export const state = () => ({
  counter: 0,
  getPosts: []
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  addPost (state, post) {
    state.getPosts.push(post)
  }
}

export const getters = {
    getPosts(state) {
      return state.getPosts
    },
}

