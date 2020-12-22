import axios from 'axios'

const instance = axios.create({
  baseURL:"/server/api/private/v1/"
})



export default instance