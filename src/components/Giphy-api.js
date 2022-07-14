import axios from 'axios'


export default async function Giphyapi (keyword) {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=uaJYTxWicEwOXbhz6NmGiuqY27a0c4F1&q=${keyword}&limit=25&offset=0&rating=g&lang=en`)
    // console.log(response.data.data)
    

   return response;
}