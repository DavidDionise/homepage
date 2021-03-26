import { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { config } from "../../config";
import { Maybe } from "../../types/common";
import { Breakpoint } from "../../types/ui";
import { generateDayFacetRange } from "../../utils/generateDayFacetRange";
import { DayFacet, TimeContext } from "./MasterOfTime";

export function Sun() {
  useEffect(() => {
    console.log(">> hit");
  });
  return <StyledSun />;
}

const animationDuration = [
  generateDayFacetRange(DayFacet.MORNING),
  generateDayFacetRange(DayFacet.MID_DAY),
  generateDayFacetRange(DayFacet.EVENING),
].reduce((acc, range) => acc + range.length, 0);

const sunRotation = keyframes`
  from {
    transform: rotate(-30deg) translateY(-1000px) translateX(50%);
  }

  to {
    transform: rotate(30deg) translateY(-1000px) translateX(50%);
  }
`;

const StyledSun = styled.div`
  width: 50px;
  height: 50px;
  background-color: hsl(51.12244897959183, 100%, 61.568627450980394%);
  box-shadow: 0 0 8px hsl(51.12244897959183, 100%, 61.568627450980394%);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: -1000px;
  transform: rotate(-30deg) translateY(-1000px) translateX(50%);

  &.rotate {
    animation: ${sunRotation} 5s;
  }
`;
