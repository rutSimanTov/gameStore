import axios from "axios"


const url = "http://localhost:8080/game"


export const getAllGame = () => {
    return axios.get(`${url}/all` )
}

export const removeGame=(id)=>{
    return axios.delete(`${url}/${id}`)
}

export const addGame = (obj) => {
    return axios.post(`${url}/`,obj)
}

export const updateGame = (id,obj) => {
    return axios.put(`${url}/${id}`,obj)
}
