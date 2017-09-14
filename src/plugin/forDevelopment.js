/**
 * Created by 王冬 on 2017/8/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 开发模式使用，当data有name属性时，即可通过window[name]来访问该组件
 */

export default {
  install: function (Vue, options) {
    Vue.mixin({
      created () {
        if (this.name) {
          window[this.name] = this
        }
      }
    })
  }
}
