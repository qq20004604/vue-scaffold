import Vue from 'vue'
import Vuex from 'vuex'
import userInfo from './user_info'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  strict: process.env.NODE_ENV === 'development', // 开发者模式下启用严格模式
  modules: {
    userInfo
  }
})

export default store
