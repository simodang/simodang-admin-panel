require('dotenv').config();
import axios from 'axios';

export const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers:{
        Authorization: `Bearer ${process.env.TOKEN_URL}`
    }
});