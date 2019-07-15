import axios from 'axios'
import NProgress from 'nprogress' // 進度條動畫
// import router from '../router'

// 創建axios實例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})
service.interceptors.request.use(
  config => {
    NProgress.inc()
    return config
  },
  err => {
    return Promise.reject(err)
  })

// response 攔截器
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */
  response => {
    NProgress.done()
    // 可添加判斷
    return response.data
  },

  error => {
    console.log('err' + error) // for debug

    NProgress.done()
    return Promise.reject(error)
  }
)

export default service
