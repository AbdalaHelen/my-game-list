import { API_URL as url } from '@/config/'
import axios from 'axios'

export class HttpService {
  constructor (route) {
    this.route = route
  }

  get url () {
    return url + this.route
  }

  getAll () {
    let response = axios.get(this.url)
    return response
  }

  getById (id) {
    let response = axios.get(`${this.url}/${id}`)
    return response
  }

  post (params) {
    let response = axios.post(this.url, params)
    return response
  }

  put (id, params) {
    let response = axios.put(`${this.url}/${id}`, params)
    return response
  }

  patch (id, params) {
    let response = axios.patch(`${this.url}/${id}`, params)
    return response
  }

  delete (id, params) {
    let response = axios.delete(`${this.url}/${id}`)
    return response
  }
}
