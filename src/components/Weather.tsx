import React, { useContext } from "react";
import {
  WeatherContext,
  WeatherProducerProps,
  WeatherType,
} from "./Hero/MasterOfWeather";
import { Rain } from "./Hero/Rain";
import { Snow } from "./Hero/Snow";

export function Weather(props: WeatherProducerProps) {
  const { weatherType } = useContext(WeatherContext);

  switch (weatherType) {
    case WeatherType.RAIN:
      return <Rain containerHeight={props.containerHeight} />;
    case WeatherType.SNOW:
      return <Snow containerHeight={props.containerHeight} />;
    default:
      return null;
  }
}
