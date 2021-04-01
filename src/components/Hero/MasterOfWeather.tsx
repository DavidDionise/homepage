import React from "react";
import { useContext, useEffect, useState } from "react";
import { DefaultProps } from "../../types/common";
import { randomInteger } from "../../utils/random";
import { DayFacet, TimeContext } from "./MasterOfTime";

export enum WeatherType {
  NONE,
  RAIN,
  SNOW,
}

export enum CondensationType {
  RAIN,
  SNOW,
}

export type WeatherProducerProps = {
  containerHeight: number;
};

type WeatherContextType = {
  weatherType: WeatherType;
};

const INITIAL_WEATHER_TYPE = WeatherType.NONE;

export const WeatherContext: React.Context<WeatherContextType> = React.createContext<WeatherContextType>(
  {
    weatherType: INITIAL_WEATHER_TYPE,
  }
);

export function MasterOfWeather(props: DefaultProps) {
  const timeContext = useContext(TimeContext);
  const [weatherType, setWeatherType] = useState(INITIAL_WEATHER_TYPE);

  useEffect(() => {
    switch (timeContext.facet) {
      case DayFacet.NIGHT:
        setWeatherType(WeatherType.RAIN);
        break;
      case DayFacet.MID_DAY:
      case DayFacet.EVENING:
        setWeatherType(WeatherType.SNOW);
        break;
      default:
        setWeatherType(WeatherType.NONE);
    }
  }, [timeContext.facet]);

  return (
    <WeatherContext.Provider value={{ weatherType }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

function selectWeatherType(weatherType: WeatherType) {
  switch (weatherType) {
    case WeatherType.NONE:
      return WeatherType.RAIN;
    case WeatherType.RAIN:
      return WeatherType.SNOW;
    case WeatherType.SNOW:
      return WeatherType.NONE;
    default:
      throw new Error("Invalid index for weather selction");
  }
}
