import {http, httpPlace} from "src/boot/axios"

export const registerUser=(payload,httpConfig={})=>{
    let url=`/login`;
    return http.post(url,payload, httpConfig)
}

export const registerLocale=(payload,httpConfig={})=>{
  let url=`/inseriscilocale`;
  return http.post(url,payload, httpConfig)
}

export const getPlace=(value,httpConfig={})=>{
  let url=`/search?q=${value}&format=geocodejson`;
  return httpPlace.get(url, httpConfig)
}
