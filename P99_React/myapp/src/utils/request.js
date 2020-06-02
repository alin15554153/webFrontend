import axios from 'axios'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://192.168.60.230:3000/mock/51',
  timeout: 30000// 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {

      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        return Promise.reject(error)
      }
    }
    if (code) {
      if (code === 401) {

      } else if (code === 403) {
      } else {
        const title = error.response.data.message
        if (title !== undefined) {
          console.log(title)
        }
      }
    } else {
      if (error.message !== 'cancel request') {
      }
    }
    return Promise.reject(error)
  }
)
export default service
