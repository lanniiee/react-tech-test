import "./Card.scss";

const Card = ({data}) => {

    let currentTemp = Math.floor(data.main.temp - 273.15);
    let minTemp = Math.floor(data.main.temp_min - 273.15);
    let maxTemp = Math.floor(data.main.temp_max - 273.15);

    return (
        <div className="card">
            <h1 className="card__heading">{data.name}</h1>
            <div className="card__details">
                <p className="card__details--temp">Temperature: {currentTemp}°C</p>
                <p className="card__details--humidity">Humidity: {data.main.humidity}</p>
                <p className="card__details--minTemp">Min: {minTemp}°C</p>
                <p className="card__details--maxTemp">Max: {maxTemp}°C</p>
            </div>
        </div>
    )
}

export default Card;