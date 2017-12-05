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
    // 清除登录状态的时候，不调用这个，而是调用src/common/js/token.js里面的cleanToken方法
    cleanUserState (state) {
      state.token = ''
      state.userId = ''
      localStorage.timeout = ''
    }
  }
}
export default store
