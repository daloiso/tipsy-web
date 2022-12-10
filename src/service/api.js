import {http, httpPlace} from "src/boot/axios"
import https from 'https'
const fs = require('fs');
export const registerUser=(payload,httpConfig={})=>{
    let url=`/login/inserisci`;
    return http.post(url,payload, httpConfig)
}

export const registerLocale=(payload,httpConfig={})=>{
  let url=`/locale/inserisci`;
  return http.post(url,payload, httpConfig)
   
}

export const getPlace=(value,httpConfig={})=>{
  let url=`/search?q=${value}&format=geocodejson`;
  return httpPlace.get(url, httpConfig)
}
