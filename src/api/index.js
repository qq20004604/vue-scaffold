let ajax = {}

export default {
  install: function (Vue, options) {
    Vue.prototype.http = ajax
  }
}
