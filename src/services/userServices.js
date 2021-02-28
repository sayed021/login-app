import { getCookie } from './cookieService';

const axios = require('axios');
export const TOKEN_KEY = "TOKEN_KEY";
export const API_BASE_URL = 'https://v2.api.bandhonbd.com/api/';

// https://v2.api.bandhonbd.com/api/UserProfile/getProfileData/b2227c16-0a50-41d5-8f60-a31dd3962170/true
const tokenKey = getCookie('TOKEN_KEY');


const config = {
    headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenKey}`
    }
}
export const getUser = async user => {
    // return (axios.post(API_BASE_URL+'/Login', user, { headers: { 'Content-Type': 'application/js on' }}))
    return axios.get(API_BASE_URL+'UserProfile/getProfileData/b2227c16-0a50-41d5-8f60-a31dd3962170/true', config)
}