import axios from 'axios'
import { toast } from 'react-toastify'

// const token = localStorage.getItem("token");
const token = process.env.API_TOKEN
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
}


const axhttp = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers,
})

axhttp.interceptors.request.use(
  async (config) => {
    return config
  })

axhttp.interceptors.response.use(
async (response) => {
  return response.data
},
async (error) => {
  if(error.response.data.error.details?.details?.errors[0]?.message) {
  toast.error(error.response.data.error.details.details.errors[0].message + " " + error.response.data.error.details.details.errors[0].path[0])
}
  toast.error("Something went wrong")
  return Promise.reject(error)
}

)

export { axhttp}