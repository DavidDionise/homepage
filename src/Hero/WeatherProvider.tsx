import { Context, createContext, useContext, useEffect, useState } from "react";
import { config } from "../config";
import { DefaultProps } from "../types/common";

export type WeatherContextType = {
  isNight: boolean;
};

export const WeatherContext: Context<WeatherContextType> = createContext<WeatherContextType>(
  {
    isNight: false,
  }
);

export function WeatherProvider(props: DefaultProps) {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsNight(!isNight);
    }, config.dayLength * 1000);

    return () => clearTimeout(timerId);
  }, [isNight]);

  const contextValue: WeatherContextType = {
    isNight,
  };

  return (
    <WeatherContext.Provider value={contextValue}>
      {props.children}
    </WeatherContext.Provider>
  );
}
