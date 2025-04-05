import axios from "axios"


const url = "http://localhost:8080/customer"

export const checkUser = (name,pass) => {
    return axios.get(`${url}/${name}/${pass}`)
}

export const addUser = (obj) => {
    return axios.post(`${url}/`,obj)
}

