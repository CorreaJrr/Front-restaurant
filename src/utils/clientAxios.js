// import axios from "axios";

// const token = localStorage.getItem('token')
// const URL_BASE = import.meta.env.VITE_URL_BASE;

// const clientAxios = axios.create({
//     baseURL: URL_BASE,
//     headers: {
//         'Content-Type': 'application/json; charser=UTF-8',
//         'access-token': token,
//     }
// })

// export default clientAxios

import axiosOriginal from "axios";
const URL_BASE = import.meta.env.VITE_URL_BASE;

const clientAxios = axiosOriginal.create({
   baseURL: URL_BASE, // IP Local
});


export default clientAxios