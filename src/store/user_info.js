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
    // 这个是登录后更新信息
    updateUserByLogin (state, payload) {
      state.token = payload.token
      state.userId = payload.userId
      localStorage.timeout = Number(new Date()) // 过期时间
    },
    // 这个是从localStorage里读取当前已登录的信息
    updateUserByToken (state, payload) {
      state.token = payload.token
      state.userId = payload.userId
    },
    cleanUserState (state) {
      state.token = ''
      state.userId = ''
      localStorage.timeout = ''
      localStorage.userId = ''
      localStorage.token = ''
    }
  }
}
export default store
