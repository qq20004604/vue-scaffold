import Vue from 'vue'
import Router from 'vue-router'
// PC端组件
import HomePage from 'page/Homepage'
import userInfo from 'page/user_info'
import login from 'page/login'
// PC端组件
import NotFound from 'page/404'
import store from '../store/store'
import {cleanToken, getToken} from '../common/js/token'

const expiredTime = 3600 * 1000

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: HomePage
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      meta: {
        requireAuth: true
      },
      name: 'userInfo',
      path: '/userInfo',
      component: userInfo
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 登录拦截
router.beforeEach((to, from, next) => {
  // 1、如果登录过期则清除用户信息
  // 2、判断该路由是否需要登录权限
  // 2.1、需要，然后检查是否有登录数据
  // 2.1.1、已登录，跳转到下个页面
  // 2.1.2、未登录，去获取token后再判断是否登录
  // 2.1.2.1、已登录，跳转到下个页面
  // 2.1.2.2、未登录，跳转到登录页面，并设置登录后的下个页面是该页面
  // 2.2、不需要，跳转到下个页面

  // 登录过期，清除tokken
  if (localStorage.timeout - Number(new Date()) > expiredTime) {
    cleanToken()
  }
  if (to.meta.requireAuth) {
    // 1.1、如果需要，且当前是登录状态
    if (store.state.userInfo.token) {  // 通过vuex state获取当前的token是否存在
      next()
    } else {
      store.commit('updateUserByToken', getToken())
      if (store.state.userInfo.token) {  // 通过vuex state获取当前的token是否存在
        next()
      } else {
        store.commit('updateNextPage', to.fullPath)
        next({path: '/login'})
      }
    }
  } else {
    next()
  }
})

export default router
