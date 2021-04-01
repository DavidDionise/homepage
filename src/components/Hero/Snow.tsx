import styled from "styled-components";
import {
  CondensationType,
  WeatherProducerProps,
  WeatherType,
} from "./MasterOfWeather";
import { Condensation, StyledCondensationProps } from "./Condensation";

export function Snow(props: WeatherProducerProps) {
  return (
    <Condensation
      containerHeight={props.containerHeight}
      type={CondensationType.SNOW}
      styledComponent={StyledFlake}
    />
  );
}

const StyledFlake = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${(p: StyledCondensationProps) => p.animation}
    ${(p: StyledCondensationProps) => p.duration}s infinite linear
    ${(p: StyledCondensationProps) => p.delay}s;
  box-shadow: 0 0 8px #fff;
`;
