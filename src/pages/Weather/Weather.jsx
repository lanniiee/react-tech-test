import "./Weather.scss";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import { weatherApi } from "../../utils/apiUtils";

const Weather = () => {

    const [londonWeather, setLondonWeather] = useState();
    const [bristolWeather, setBristolWeather] = useState();
    const [romeWeather, setRomeWeather] = useState({});
    const [loading, setLoading] = useState(true);

    const handleWeather = async () => {
        let london = await weatherApi(2643744);
        let bristol = await weatherApi(4749005);
        let rome = await weatherApi(4219762);
        setLondonWeather(london)
        setBristolWeather(bristol)
        setRomeWeather(rome)
        setLoading(false);
    }

    useEffect(()=> {
        handleWeather()
    }, []);
    
    return (
        <div className="weather">
            <h1>Weather</h1>
            {!loading && <div>
                <Card data={londonWeather} />
                <Card data={bristolWeather} />
                <Card data={romeWeather} />
            </div>}

        </div>
    )
}

export default Weather;