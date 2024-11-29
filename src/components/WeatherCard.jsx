import { useState } from 'react';
import './WeatherCard.css'

const WeatherCard = ({ weather }) => {

  const [isCelsius, setIsCelsius] = useState(true)
  const [temp, setTemp] = useState((weather?.main.temp - 273.15).toFixed(1))

  const handleClick = () => {
    if(isCelsius) {
      setTemp(((weather.main.temp - 273.15) * 9/5 + 32).toFixed(1))
    } else {
      setTemp((weather.main.temp - 273.15).toFixed(1))
    }
    setIsCelsius(!isCelsius)
  }

  return (
    <article className="weather">
      <h1 className="weather__title">Weather App</h1>
      <h2 className="weather__city">{weather?.name}</h2>
      <section className="body">
        <header className="body__header">
          <img className="body__icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
        </header>
        <article className="description">
          <h3 className="description__value">
            {weather?.weather[0].description}
          </h3>
          <ul className="list">
            <li className="list__item">
              <span className="list__label">Vel. Viento</span>
              <span className="list__value">{weather?.wind.speed}m/s</span>
            </li>
            <li className="list__item">
              <span className="list__label">Nubes</span>
              <span className="list__value">{weather?.clouds.all}%</span>
            </li>
            <li className="list__item">
              <span className="list__label">Presión At.</span>
              <span className="list__value">{weather?.main.pressure}hPa</span>
            </li>
          </ul>
        </article>
      </section>
      <h2 className="weather__temp">{temp} {(isCelsius)?'ºC':'ºF'}</h2>
      <button onClick={handleClick} className="weather__btn">Transformar</button>
    </article>
  );
};

export default WeatherCard;
