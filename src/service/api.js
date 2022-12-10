import {http, httpPlace} from "src/boot/axios"
import https from 'https'
const fs = require('fs');
export const registerUser=(payload,httpConfig={})=>{
    let url=`/login/inserisci`;
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    })
    return http.post(url,payload, {
      httpsAgent:httpsAgent
    })
}

export const registerLocale=(payload,httpConfig={})=>{
  let url=`/locale/inserisci`;
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })
  return http.post(url,payload,  {
    httpsAgent:httpsAgent
  })
   
}

export const getPlace=(value,httpConfig={})=>{
  let url=`/search?q=${value}&format=geocodejson`;
  return httpPlace.get(url, httpConfig)
}
