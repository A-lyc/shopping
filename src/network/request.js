import axios from 'axios'

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://106.54.54.237:8000/api/wh',
  })

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  },err => {
    return err.data
  })

  // 2.2.响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    return err.data
  })

  // 3.发送真正的网络请求
  return instance(config)
}
