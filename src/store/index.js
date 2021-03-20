import Vue from 'vue'
import Vuex from 'vuex'
import foodData from '../data/foodsData.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodData,
    card: []
  },
  mutations: {
    mCard: (state, { food }) => {
      state.card.unshift(food);
      localStorage.setItem('dataCard', JSON.stringify(state.card))
    },
    dataShop: (state) => {
      if (localStorage.getItem('dataCard')) {
        state.card = JSON.parse(localStorage.getItem('dataCard'))
      }
    },
    fCard: (state, index) => {
      state.card.splice(index, 1)
      localStorage.setItem('dataCard', JSON.stringify(state.card))
    }
  },
  actions: {
    aCard: ({ commit }, food) => {
      commit('mCard', food)
    },
    dCard: ({ commit }, food) => {
      commit('fCard', food)
    }
  },
  modules: {
  }
})
