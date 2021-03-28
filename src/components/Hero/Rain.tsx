import styled from "styled-components";
import {
  CondensationType,
  WeatherProducerProps,
  WeatherType,
} from "./MasterOfWeather";
import { Condensation, StyledCondensationProps } from "./Condensation";

export function Rain(props: WeatherProducerProps) {
  return (
    <Condensation
      containerHeight={props.containerHeight}
      styledComponent={StyledRainDrop}
      type={CondensationType.RAIN}
    />
  );
}

const StyledRainDrop = styled.div`
  position: absolute;
  background-color: white;
  animation: ${(p: StyledCondensationProps) => p.animation}
    ${(p: StyledCondensationProps) => p.duration}s infinite linear
    ${(p: StyledCondensationProps) => p.delay}s;
`;
