import { useEffect, useState } from "react"
import WeatherCard from "./components/WeatherCard"
import axios from "axios"
import Loading from "./components/Loading"

const App = () => {
  
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [hasError, setHasError] = useState(false)
  
  useEffect(() => {

    const success = pos => {
      setLatLon({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      })
      setHasError(false)
    }

    const error = () => {
      setHasError(true)
    }

    navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true})
  }, [])

  const APIKey = 'd993d119ca66d0a611399e0a7acadf4a'

  useEffect(() => {
    if(latLon !== undefined) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${APIKey}&lang=es`

      axios.get(url)
        .then(res => setWeather(res.data))
        .catch(err => console.log(err))
    }
  }, [latLon])

  return (
    <div className="app">
      {
        (weather === undefined)
          ? <Loading hasError={hasError} />
          : (
            <WeatherCard
              weather={weather}
            />
          )
      }
    </div>
  )
}

export default App