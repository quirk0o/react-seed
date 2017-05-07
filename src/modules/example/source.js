import axios from 'axios'

const API_URL = process.env.API_URL
const TODOS_URL = `${API_URL}/todos`

export default {
  fetch() {
    return axios
      .get(TODOS_URL)
      .then(res => res.data)
  }
}