import axiosClient from "./axiosClient";

const authApi = {
    login : (userInfo) => {
        const url = "/auth/login"
        return axiosClient.post(url, userInfo)
    },
    register : (userRegister) => {
        const url = "/auth/register"
        return axiosClient.post(url, userRegister)
    },
    forgotPassword : (email) => {
        const url = "/auth/forgot-password"
        return axiosClient.post(url, email)
    },
    sendVerifyEmail : (email) => {
        const url = "/auth/send-verification-email"
        return axiosClient.post(url, email)
    },
    verifyEmail : (email, token) => {
        const url = `auth/verify-email?token=${token}`
        return axiosClient.post(url, email)
    },
    
}

export default authApi;