import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {},
  strict: process.env.NODE_ENV === 'development' // 开发者模式下启用严格模式
})

export default store
