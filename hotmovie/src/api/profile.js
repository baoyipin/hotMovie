let axios=require("axios");
axios.defaults.withCredentials=true;
axios.defaults.baseURL="http://localhost:8080";
axios.interceptors.response.use(function (res) {
    return res.data;
});
export function reg(username,password) {
    return axios.post("/reg",{username,password})
}
export function login(username,password) {
    return axios.post("/login",{username,password})
}
export function validate() {
    return axios.get("/validate");
}