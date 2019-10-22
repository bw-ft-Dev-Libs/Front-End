import axios from 'axios'

export default function axiosWithAuth() {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://dev-libs-test.herokuapp.com',
        headers: {
            Authorization: token
        }
    })
}