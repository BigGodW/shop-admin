import axios from 'axios'

const instance = axios.create({
  baseURL:"/server/api/private/v1/"
})

//请求拦截器
instance.interceptors.request.use(config=>{
  config.headers.Authorization= window.localStorage.getItem('user')
  return config
})

//响应拦截器
instance.interceptors.response.use(res=>{
  return res.data
})

export default instance