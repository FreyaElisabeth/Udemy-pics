import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID e3df60569bac8cd2b0a7d10bc3e8765efcd7730dc44a945e304a09d5d4a494a0'
  }
})
