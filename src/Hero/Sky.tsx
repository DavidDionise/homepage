import { useContext } from "react";
import styled from "styled-components";
import { config } from "../config";
import { WeatherContext } from "./WeatherProvider";

export function Sky() {
  const weatherContext = useContext(WeatherContext);

  return <StyledSky className={weatherContext.isNight ? "night" : ""} />;
}

const StyledSky = styled.div`
  height: 100%;
  transition: background-color ${config.dayLength}s;
  background-color: hsl(217, 100%, 87%);

  &.night {
    background-color: hsl(217, 31%, 21%);
  }
`;
