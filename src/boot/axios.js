import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
export const http = axios.create({
    baseURL:'http://localhost:8080'
  })