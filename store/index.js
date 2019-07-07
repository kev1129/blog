export const state = () => ({
  counter: 0,
  getPosts: [],
  page: null,
})

// actionsからデータを受け取ってstateを書き換える
export const mutations = {
  increment (state) {
    state.counter++
  },
  addPost (state, post) {
    state.getPosts.push(post)
  }
}

// コンポーネントから値を受け取ってmutationsにわたす
export const actions = {
  updateMember (context, member) {
      context.commit('updateMember', member)
  }
}

// stateを取得する
export const getters = {
    getPosts(state) {
      return state.getPosts
    },
}

