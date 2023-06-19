import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./weather.css";

export default function WeatherForecastInfo(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }
  return (
    <div>
      <div className="dailyforecast opacity-75">{day()}</div>{" "}
      <img
        src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.description}
        width={60}
      />{" "}
      <div className="daily-temp">
        <span className="daily-temp-max">{maxTemp}°</span>
        <span className="daily-temp-min">{minTemp}° </span>
      </div>
    </div>
  );
}
