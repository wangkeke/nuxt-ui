import axios from 'axios'

export const state = () => ({
})

export const mutations = {

}

export const actions = {
  async query({ commit }, { params }) {
    return await axios.get('/api/movie/query', { params })
  },
}
