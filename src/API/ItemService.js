import axios from 'axios';

export default class ItemService {
    static async getAll() {
        const response = await axios.get('http://localhost:5000/items')
        return response.data
    }
}