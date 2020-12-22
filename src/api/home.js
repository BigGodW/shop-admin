import axios from './index'

export const menus = ()=>{
  return axios.get('menus')
}

export const users = (params)=>{
  return axios.get('users',{
    params
  })
}