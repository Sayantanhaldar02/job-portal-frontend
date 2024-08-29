import {jwtDecode} from "jwt-decode"

export const setToken = (token)=>{
    localStorage.setItem('authToken', token)
    return;
}

const getUserDetails = (token)=>{
    if(token){
        const userData = jwtDecode(token)
        return userData
    }
    return null
}

export default getUserDetails;