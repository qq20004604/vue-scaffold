/*
* 用户登录信息
* */

let store = {
  state: {
    nextPage: '', // 下一页
    token: '',  // token
    userId: ''  // 用户id
  },
  mutations: {
    updateNextPage (state, payload) {
      state.nextPage = payload
    },
    updateUser (state, payload) {
      state.token = payload.token
      state.userId = payload.userId
      localStorage.timeout = Number(new Date()) // 过期时间
    },
    cleanUserState (state) {
      state.token = ''
      state.userId = ''
      localStorage.timeout = ''
    }
  }
}
export default store
