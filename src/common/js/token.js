import store from '@/store/store.js'

function setToken (payload) {
  localStorage.token = payload.token
  localStorage.userId = payload.userId
}

function getToken () {
  let payload = {
    token: '',
    userId: ''
  }
  if (localStorage.token && localStorage.userId) {
    payload = {
      token: localStorage.token,
      userId: localStorage.userId
    }
  }
  return payload
}

function cleanToken () {
  localStorage.token = ''
  localStorage.userId = ''
  localStorage.timeout = ''
  store.commit('cleanUserState')
}

export {setToken, getToken, cleanToken}
