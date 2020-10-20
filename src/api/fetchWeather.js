import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '10f12efaaad87a8ad5d491ab98bcdfc8';
export const fetchWeather = async(query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            APPID : API_KEY,
        }
    })
    return data
}