import axios from "axios"


const url = "http://localhost:8080/category"


export const updateCategory=(id,obj)=>{
    return axios.put(`${url}/${id}`,obj)
}

export const getAllCategory = () => {
    return axios.get(`${url}/`)
}

export const removeCategory=(id)=>{
    return axios.delete(`${url}/${id}`)
}


export const addCategory=(obj)=>{
    return axios.post(`${url}/`,obj)
}
// cat.post('/', categoryController.add);
// cat.put('/:id', categoryController.update);
