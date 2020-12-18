import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export default async function getQuery (apiUrl) {
    const response = await axiosInstance.get(apiUrl);
    return response
}