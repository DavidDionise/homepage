import React, { useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { config } from "../../config";
import { Maybe } from "../../types/common";
import { Breakpoint } from "../../types/ui";
import { Sky } from "./Sky";
import { DayFacet, TimeContext } from "./MasterOfTime";
import cx from "classnames";
import { Weather } from "../Weather";
import { mediaQuery } from "../../utils/mediaQuery";

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
    if (isFirstDay && weatherContext.facet === DayFacet.NIGHT) {
      setIsFirstDay(false);
    }
  }, [weatherContext.facet, isFirstDay]);

  return (
    <Container ref={setContainerElement}>
      <SkyContainer>
        <Sky />
      </SkyContainer>
      <StyledH1 className={isDark ? "night" : ""}>David Dionise</StyledH1>
      {containerElement ? (
        <Weather containerHeight={containerElement.clientHeight} />
      ) : null}
      <MountainContainer>
        <StyledImage
          src="mountains.png"
          className={cx({ dark: isDark, firstDay: isFirstDay })}
        />
      </MountainContainer>
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
  width: 100%;
  margin: auto;
  height: 736px;
  z-index: 0;
  overflow: hidden;

  ${mediaQuery(null, Breakpoint.TABLET)} {
    height: 290px;
  }

  ${mediaQuery(Breakpoint.TABLET, Breakpoint.DESKTOP_SMALL)} {
    height: 520px;
  }
`;

const ImageContainer = styled.div`
  width: ${config.ui.heroImageWidths[Breakpoint.DESKTOP_LARGE]}px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  ${mediaQuery(null, Breakpoint.TABLET)} {
    width: ${config.ui.heroImageWidths[Breakpoint.MOBILE]}px;
    top: 28px;
  }

  ${mediaQuery(Breakpoint.TABLET, Breakpoint.DESKTOP_SMALL)} {
    width: ${config.ui.heroImageWidths[Breakpoint.TABLET]}px;
    top: 69px;
  }
`;

const MountainContainer = styled(ImageContainer)`
  position: absolute;
  z-index: 3;
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

const StyledH1 = styled.h1`
  font-family: ${config.ui.fonts.title};
  font-weight: bolder;
  position: absolute;
  z-index: 4;
  margin: 0;
  color: ${config.ui.colors.secondary.med};
  transition: color ${config.time.hourDuration * 3}s;

  font-size: 2.5em;
  top: 10px;
  left: 30px;

  &.night {
    color: ${config.ui.colors.secondary.light};
  }

  ${mediaQuery(null, Breakpoint.TABLET)} {
    font-size: 2em;
    width: 50%;
  }

  ${mediaQuery(Breakpoint.TABLET, Breakpoint.DESKTOP_SMALL)} {
    font-size: 2.5em;
    top: 30px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  line-height: 0;
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
