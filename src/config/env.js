// api请求基路径
let baseURL
// 图片url基路径
let imgURL = ''

if (process.env.NODE_ENV === 'development') { // 开发环境
  baseURL = '/api'
} else { // 生产环境
  baseURL = ''
}

export {
  baseURL,
  imgURL
}
