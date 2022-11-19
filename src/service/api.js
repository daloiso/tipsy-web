import {http} from "src/boot/axios"

export const registerUser=(payload,httpConfig={}){
    let url=`/login`;
    return http.post(url,payload, httpConfig)
}