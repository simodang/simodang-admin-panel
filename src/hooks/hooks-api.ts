require("dotenv").config();
import axios from 'axios';

const token = "aksesiniuntukmuhambakuyangsetia";

export const api = axios.create({
    baseURL: 'http://www.devel-filkomub.site/admin',
    headers:{
        Authorization: `Bearer ${token}`
    }
});
module.exports= {
    api
}