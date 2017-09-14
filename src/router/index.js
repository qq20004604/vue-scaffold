import Vue from 'vue'
import Router from 'vue-router'
// PC端组件
import HomePage from 'page/Homepage'
// PC端组件
import NotFound from 'page/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'HomePage',
      path: '/',
      component: HomePage
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})
