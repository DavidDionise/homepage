import styled, { Keyframes } from "styled-components";
import { range } from "../../utils/range";
import { CondensationType } from "../MasterOfWeather";
import { Condensation } from "./Condensation";

type Props = {
  containerHeight: number;
};

export function SnowFlakes(props: Props) {
  return (
    <Condensation
      containerHeight={props.containerHeight}
      type={CondensationType.SNOW}
      styledComponent={StyledFlake}
    />
  );
}

type StyledFlakeProps = {
  duration: number;
  animation: Keyframes;
};

const StyledFlake = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  animation: ${(p: StyledFlakeProps) => p.animation}
    ${(p: StyledFlakeProps) => p.duration}s infinite linear;
  box-shadow: 0 0 8px #fff;
`;
