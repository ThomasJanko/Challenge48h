import axios from 'axios';

const apiUrl = "http://localhost:1337/api";

export default {
    getEvents() {
        return axios.get(`${apiUrl}/events`)
        .then((res) => res.data);
    },

    addPEvents(form) {
        return axios.post(`${apiUrl}/events`, form)
        .then((res) => res.json());
    },
}