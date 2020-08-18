import axios from 'axios'

export const state = () => ({
  user: null,
  nav: null,
})

export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
}

export const actions = {
  // nuxtServerInit is called by Nuxt.js before server-rendering every page
  nuxtServerInit({ commit }, { req }) {
    if (req.session && req.session.user) {
      commit('SET_USER', req.session.user)
    }
  },
  async login({ commit }, { username, password, captcha }) {
    const { data } = await axios.post('/api/login', {
      username,
      password,
      captcha,
    })
    commit('SET_USER', data)
  },

  async logout({ commit }) {
    await axios.post('/api/logout')
    commit('SET_USER', null)
  },
}
