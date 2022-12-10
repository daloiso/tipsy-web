import Vue from 'vue'
import axios from 'axios'
import https from 'https'
const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
})
axios.defaults.httpsAgent = httpsAgent

Vue.prototype.$axios = axios

export const http = axios.create({
  baseURL:'https://localhost:8443',
  })


export const httpPlace = axios.create({
  baseURL:'https://nominatim.openstreetmap.org'
})
