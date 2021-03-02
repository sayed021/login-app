import { config } from './config';
import { getCookie } from './cookieService';
const axios = require('axios');

export const getUser = () => {
    const headerConfig = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie(config.TOKEN_KEY)}`
        }
    }

    return axios.get(config.BaseURL_API+'UserProfile/getProfileData/b2227c16-0a50-41d5-8f60-a31dd3962170/true', headerConfig)
}