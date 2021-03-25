import styled from "styled-components";
import { config } from "../config";
import { Breakpoint } from "../types/ui";

export function Sun() {
  return (
    <SunContainer>
      <Sun />
    </SunContainer>
  );
}

const SunContainer = styled.div`
  position: absolute;
  top: 720px;
  width: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] * 2}px;
  height: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] * 2}px;
  left: -${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] / 2}px;
  transform: rotate(0deg);
  transition: transform 4s;
  z-index: 3;

  &.rotate {
    transform: rotate(90deg);
  }
`;

const StyledSun = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  box-shadow: 0 0 8px yellow;
  border-radius: 50%;
`;
