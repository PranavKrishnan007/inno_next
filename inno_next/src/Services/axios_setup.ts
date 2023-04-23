import axios from 'axios'

// const token = localStorage.getItem("token");
const token = process.env.API_TOKEN
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
}

export const axhttp = axios.create({
  baseURL: 'http://localhost:1337/api',
  headers,
})
