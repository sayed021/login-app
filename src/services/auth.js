import { setCookie, removeCookie } from './cookieService';

const axios = require('axios');
export const TOKEN_KEY = "TOKEN_KEY";
export const API_BASE_URL = 'http://v2.api.bandhonbd.com/api/ApplicationUser';

export const isAuthenticated = () => {
  // TODO: improve authentication validation
  return sessionStorage.getItem(TOKEN_KEY) !== null
}

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY)
}

export const login = user => {
 return (axios.post(API_BASE_URL+'/Login', user, { headers: { 'Content-Type': 'application/json' }}))
}

export const setLoginToken = token => {
  
  // TOKEYN KEY, TOKEN, EXPIRE DATE?
  setCookie(TOKEN_KEY, token, 500);
}

export const loginUserSuccess = res => {
  if(res.status === 200) {
    setLoginToken(res.data.responseObject);
  }
}

export const logoutService = () => {
  // sessionStorage.removeItem(TOKEN_KEY);
  removeCookie(TOKEN_KEY);
  return true;
}
