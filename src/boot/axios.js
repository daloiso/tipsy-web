import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
export const http = axios.create({
  baseURL:'http://localhost:8080',
  })

http.interceptors.request.use(config => {
  config.headers.post['Access-Control-Allow-Origin'] = '*';
  config.headers.post['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
  config.headers.post['Access-Control-Allow-Headers'] = 'Content-Type';
  return config;
});

export const httpPlace = axios.create({
  baseURL:'https://nominatim.openstreetmap.org'
})
