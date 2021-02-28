import { setCookie, removeCookie, getCookie } from './cookieService';

const axios = require('axios');
export const TOKEN_KEY = "TOKEN_KEY";
export const API_BASE_URL = 'http://v2.api.bandhonbd.com/api/ApplicationUser';

export const isAuthenticated = () => {
  // TODO: improve authentication validation
  // return sessionStorage.getItem(TOKEN_KEY) !== null
  getCookie(TOKEN_KEY);
}

export const getToken = () => {
  return getCookie(TOKEN_KEY);
}

export const login = user => {
 return (axios.post(API_BASE_URL+'/Login', user, { headers: { 'Content-Type': 'application/json' }}))
}

export const setLoginToken = token => {
  setCookie(TOKEN_KEY, token, 500);
}

export const loginUserSuccess = res => {
  if(res.status === 200) {
    setLoginToken(res.data.responseObject);
  }
}

export const logoutService = () => {
  removeCookie(TOKEN_KEY);
  return true;
}
