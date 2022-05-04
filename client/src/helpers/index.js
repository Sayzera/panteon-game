
import jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import axios from "axios";
import config from '../config/env';

export const IsJsonString = (str) =>  {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}


export const jwtCheck = (auth) => {

  if(IsJsonString(auth)) {
    let token = jwt_decode(JSON.parse(auth)?.token);

    if(!token && !token?.userId ) {
        return false
    } else {
      if(token.exp < Date.now() / 1000) {
        Cookies.remove('auth')
        return false
      }

      return true;
    }
  } else {
    return false
  }

}


export const jwtCheckAdmin = async (auth) => {

  if(IsJsonString(Cookies.get('auth')) ) { 
    try {
      let headers = {
        headers: {
          'Authorization': `Bearer ${JSON.parse(Cookies.get('auth')).token}`
        }
      }
      const response = await axios.post(config.url + '/auth/check', {},  headers );
    
     
        let token = jwt_decode(JSON.parse(Cookies.get('auth')).token)
    
        if(token.exp < Date.now() / 1000) {
            let res = {
              success: 0,
              message: 'Token expired'
            }
    
            return res;
        }
    
      return response.data;
      } catch(e) {
        return e.response.data;
      }
  } else {
    let res = {
      success: 0,
      message: 'Token not found'
    }

    return res;
  }

}