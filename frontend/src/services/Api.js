import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:2000/'
    //baseURL: 'http://piclock.local:2000/'
  })
}