import axios from "axios"

export const key = "3377f29cb0407d1d2de1649be864a159fce5aafd";

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`
    }
})

export default api;