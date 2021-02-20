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
  sessionStorage.setItem(TOKEN_KEY, token);
}

export const loginUserSuccess = res => {
  if(res.status === 200) {
    setLoginToken(res.data.token);
  }
}

export const logout = () => {
  sessionStorage.removeItem(TOKEN_KEY)
}
