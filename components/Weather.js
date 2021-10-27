export default function Weather(weatherData) {
    return (
        <>
            {weatherData.location.name}
            {weatherData.current.condition.text}
            {weatherData.current.temp_c}°C
        </>
    )
}