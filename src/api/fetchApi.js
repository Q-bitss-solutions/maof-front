import axios from 'axios'

const API = import.meta.env.VITE_API

export default axios.create({
  baseURL: API,
})
