import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.polygon.io/v2/reference/financials/AAPL?limit=20&apiKey=pyjM4BKJgnJ46kzIFCi7SSkpkUCZEDWl'
})

export default api