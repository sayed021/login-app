import { config } from './config';
import { getCookie } from './cookieService';
const axios = require('axios');

export const getFriendList = () => {
    const headerConfig = {
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getCookie(config.TOKEN_KEY)}`
        }
    }

    return {
        data: [
        {
            id:1,
            name: 'Friend 1',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:2,
            name: 'Friend=2',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:3,
            name: 'Friend|3',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
  
        {
            id:4,
            name: 'Friend4',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:5,
            name: 'Friend-5',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:6,
            name: 'Friend- 6',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:7,
            name: 'Friend *7',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
        {
            id:8,
            name: 'Friend==8',
            profileLink: '#',
            profilePicUrl: 'https://via.placeholder.com/100'
        },
    ]} 
}