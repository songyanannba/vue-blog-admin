import axios from "axios";

//用axios的create  去创建一个实例
//request 就是 axios 
const requests = axios.create({

    baseURL:"api/",
    timeout:5000,

})

//请求拦截器
requests.interceptors.request.use((config) => {

        return config
    }
)

//返回拦截器
requests.interceptors.request.use((res)=>{
    return res.data;
} , (error)=> {

    return Promise.reject(new Error('faile'));
})



export default axios;