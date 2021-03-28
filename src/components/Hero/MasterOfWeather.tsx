import React from "react";
import { useContext, useEffect, useState } from "react";
import { DefaultProps } from "../../types/common";
import { randomInteger } from "../../utils/random";
import { TimeContext } from "./MasterOfTime";

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

export const WeatherContext: React.Context<WeatherContextType> = React.createContext<WeatherContextType>(
  {
    weatherType: WeatherType.NONE,
  }
);

export function MasterOfWeather(props: DefaultProps) {
  const timeContext = useContext(TimeContext);
  const [weatherType, setWeatherType] = useState(WeatherType.NONE);

  useEffect(() => {
    const nextWeather = selectWeatherType();
    setWeatherType(nextWeather);
  }, [timeContext.facet]);

  return (
    <WeatherContext.Provider value={{ weatherType }}>
      {props.children}
    </WeatherContext.Provider>
  );
}

function selectWeatherType() {
  switch (randomInteger(0, 2)) {
    case 0:
      return WeatherType.NONE;
    case 1:
      return WeatherType.RAIN;
    case 2:
      return WeatherType.SNOW;
    default:
      throw new Error("Invalid index for weather selction");
  }
}
