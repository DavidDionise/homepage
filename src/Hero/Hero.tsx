import React, { useContext, useState } from "react";
import styled from "styled-components";
import { config } from "../config";
import { Maybe } from "../types/common";
import { Breakpoint } from "../types/ui";
import { Sky } from "./Sky";
import { SnowFlakes } from "./SnowFlakes";
import { Sun } from "./Sun";
import { WeatherContext } from "./WeatherProvider";

const DAY_LENGTH = 3;
const IMAGE_WIDTH = 1680;

export function Hero() {
  const [containerElement, setContainerElement] = useState<Maybe<HTMLElement>>(
    null
  );
  const weatherContext = useContext(WeatherContext);

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
          className={weatherContext.isNight ? "night" : ""}
        />
      </MountainContainer>
      <TreesContainer>
        <StyledImage
          src="trees.png"
          className={weatherContext.isNight ? "night" : ""}
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

type StyledImageProps = {
  transitionDuration: number;
};

const StyledImage = styled.img`
  width: 100%;
  filter: brightness(100%);
  transition: filter ${config.dayLength / 2}s;

  &.night {
    filter: brightness(50%);
  }
`;
