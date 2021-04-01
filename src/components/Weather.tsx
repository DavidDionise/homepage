import React, { useContext } from "react";
import styled from "styled-components";
import { config } from "../config";
import {
  WeatherContext,
  WeatherProducerProps,
  WeatherType,
} from "./Hero/MasterOfWeather";
import { Rain } from "./Hero/Rain";
import { Snow } from "./Hero/Snow";
import { CSSTransitionGroup } from "react-transition-group";

export function Weather(props: WeatherProducerProps) {
  const { weatherType } = useContext(WeatherContext);
  const { weatherTransitionDuration } = config.time;

  return (
    <Container>
      <CSSTransitionGroup
        transitionName="weather"
        transitionAppear={true}
        transitionEnterTimeout={weatherTransitionDuration * 1000}
        transitionAppearTimeout={weatherTransitionDuration * 1000}
        transitionLeaveTimeout={weatherTransitionDuration * 1000}
      >
        {getActiveWeather(props.containerHeight, weatherType)}
      </CSSTransitionGroup>
    </Container>
  );
}

function getActiveWeather(containerHeight: number, weatherType: WeatherType) {
  const { weatherTransitionDuration } = config.time;

  switch (weatherType) {
    case WeatherType.RAIN:
      return (
        <WeatherTransition
          key="rain"
          transitionDuration={weatherTransitionDuration}
        >
          <Rain containerHeight={containerHeight} />
        </WeatherTransition>
      );
    case WeatherType.SNOW:
      return (
        <WeatherTransition
          key="snow"
          transitionDuration={weatherTransitionDuration}
        >
          <Snow containerHeight={containerHeight} />
        </WeatherTransition>
      );
    default:
      return <React.Fragment key="clear" />;
  }
}

const Container = styled.div`
  position: absolute;
  z-index: 100;
  width: 20px;
  height: 20px;
`;

const TestButton = styled.button`
  position: absolute;
  z-index: 100;
`;

const TestWeather = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 400px;
  background: palevioletred;
  z-index: 60;

  &.other-weather {
    background: gold;
  }
`;

type WeatherTransitionProps = {
  transitionDuration: number;
};

const WeatherTransition = styled.div`
  &.weather-enter {
    opacity: 0;
  }

  &.weather-enter.weather-enter-active {
    opacity: 1;
    transition: opacity ${(p: WeatherTransitionProps) => p.transitionDuration}s
      ease-in;
  }

  &.weather-leave {
    opacity: 1;
  }

  &.weather-leave.weather-leave-active {
    opacity: 0;
    transition: opacity
      ${(p: WeatherTransitionProps) => p.transitionDuration / 2}s ease-in;
  }

  &.weather-appear {
    opacity: 0;
  }

  &.weather-appear.weather-appear-active {
    opacity: 1;
    transition: opacity ${(p: WeatherTransitionProps) => p.transitionDuration}s
      ease-in;
  }
`;
