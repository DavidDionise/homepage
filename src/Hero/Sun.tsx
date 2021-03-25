import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { config } from "../config";
import { Breakpoint } from "../types/ui";
import { DayFacet, TimeContext } from "./MasterOfTime";

export function Sun() {
  const weatherContext = useContext(TimeContext);

  return (
    <SunContainer
      className={weatherContext.facet == DayFacet.NIGHT ? "" : "rotate"}
    >
      <StyledSun />
    </SunContainer>
  );
}

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
`;

const SunContainer = styled.div`
  position: absolute;
  top: 720px;
  width: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] * 2}px;
  height: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] * 2}px;
  left: -${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE] / 2}px;
  z-index: 3;

  /* &.rotate {
    
  } */
`;

const StyledSun = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  box-shadow: 0 0 8px yellow;
  border-radius: 50%;
`;
