import { useState } from "react"
import { useSelector } from "react-redux"

const MyHome = () => {
    const lat = useSelector(state => state.city.lat)
    const long = useSelector(state => state.city.long)
    const country = useSelector(state => state.city.country)
    const regione = useSelector(state => state.city.country)
    const [weather, setWeather] = useState([])

    const meteo = async () => {
        try {
            const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ca6924ea51fb8d4da012ae0dc6aa8e43`)
            if(response.ok){
                const data = await response.json();
                setWeather(data)
                console.log(weather);
            }
        } catch (error) {
            console.log(error + 'fetch');
        }
    }
    meteo();
    return{
        
    }
}

export default MyHome;