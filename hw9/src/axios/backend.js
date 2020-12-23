import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/thoughts',
})

export async function getQuery () {
    const response = await axiosInstance.get();
    return response
}

export async function postQuery (post) {
    const response = await axiosInstance.post(null,{value:post});
    return response
}

export async function putQuery (id,body) {
    console.log(body)
    let response = await axiosInstance.put(`/${id}`,body);
    return response
}

export async function deleteQuery (id) {
    const response = await axiosInstance.delete(`/${id}`);
    return response
}