import axios from './index'

export const menus = ()=>{
  return axios.get('menus')
}
// 获取用户
export const users = (params)=>{
  return axios.get('users',{
    params
  })
}
//查询用户
export const searchUser = (id)=>{
  return axios.get('users/'+id)
}
//添加用户
export const addUser = (data)=>{
  return axios.post('users',data)
}
//删除用户
export const deleteUser = (id)=>{
  return axios.delete('users/'+id)
}
// 用户编辑
export const editUser = (id,data)=>{
  return axios.put('users/'+id,data)
}