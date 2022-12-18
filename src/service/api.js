import {http, httpPlace} from "src/boot/axios"

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

export const registerContatto=(payload,httpConfig={})=>{
  let url=`/contatto/inserisci`;
  return http.post(url,payload, httpConfig)
}

export const retrieveContatto=(value, httpConfig={})=>{
  let url=`/contatto/visualizza?user=${value}`;
  return http.get(url, httpConfig)
}
export const modifyContatto=(payload,httpConfig={})=>{
  let url=`/contatto/modifica`;
  return http.post(url,payload, httpConfig)
}