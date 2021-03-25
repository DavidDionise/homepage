import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { config } from "../config";
import { Maybe } from "../types/common";
import { Breakpoint } from "../types/ui";
import { Sky } from "./Sky";
import { SnowFlakes } from "./SnowFlakes";
import { Sun } from "./Sun";
import { DayFacet, TimeContext } from "./MasterOfTime";
import cx from "classnames";

export function Hero() {
  const [containerElement, setContainerElement] = useState<Maybe<HTMLElement>>(
    null
  );
  const [isFirstDay, setIsFirstDay] = useState(true);
  const weatherContext = useContext(TimeContext);
  const isDark = [DayFacet.EVENING, DayFacet.NIGHT].includes(
    weatherContext.facet
  );

  useEffect(() => {
    if (isFirstDay && weatherContext.facet == DayFacet.NIGHT) {
      setIsFirstDay(false);
    }
  }, [weatherContext.facet, isFirstDay]);

  return (
    <Container ref={setContainerElement}>
      <SkyContainer>
        <Sky />
      </SkyContainer>
      <Sun />
      {containerElement ? (
        <SnowFlakes containerHeight={containerElement.clientHeight} />
      ) : null}
      <MountainContainer>
        <StyledImage
          src="mountains.png"
          className={cx({ dark: isDark, firstDay: isFirstDay })}
        />
      </MountainContainer>
      <TreesContainer>
        <StyledImage
          src="trees.png"
          className={cx({ dark: isDark, firstDay: isFirstDay })}
        />
      </TreesContainer>
    </Container>
  );
}

const SkyContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  max-width: 1680px;
  margin: auto;
  height: 884px;
  z-index: 0;
  overflow-x: hidden;
`;

const ImageContainer = styled.div`
  width: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE]}px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const MountainContainer = styled(ImageContainer)`
  z-index: 3;
`;

const TreesContainer = styled(ImageContainer)`
  top: 350px;
  z-index: 4;
`;

const gettingDark = keyframes`
  from {
    filter: brightness(100%);
  }

  to {
    filter: brightness(50%);
  }
`;

const gettingLight = keyframes`
  from {
    filter: brightness(50%);
  }

  to {
    filter: brightness(100%);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  &:not(.firstDay) {
    animation: ${gettingLight}
      ${config.time.facetDurations[DayFacet.MORNING] *
      config.time.hourDuration}s
      forwards;
  }

  &.dark {
    animation: ${gettingDark}
      ${config.time.facetDurations[DayFacet.EVENING] *
      config.time.hourDuration}s
      forwards;
  }
`;
