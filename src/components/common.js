import axios from "axios";

const baseUrl = "/"

async function validateLogin() {

    let res =  await axios.post(baseUrl + "login/validate" )
    
    return res.data.data.isLogin;
}





export  {
    validateLogin,
    baseUrl 
}