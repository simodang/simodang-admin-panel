// require("dotenv").config();
import axios from 'axios';

const { BASE_URL, TOKEN_URL } = process.env;

export const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
    headers:{
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_URL}`
    }
});
module.exports= {
    api
}