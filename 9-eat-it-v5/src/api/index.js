
import axios from 'axios';


let api = {
    loadItems() {
        let api = 'http://localhost:8181/api/items';
        return axios.get(api)
    },
    loadReviews(id) {
        let api = `http://localhost:8181/api/items/${id}/reviews`;
        return axios.get(api)
    }
}

export default api;