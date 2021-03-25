import React, { useState } from "react";
import styled from "styled-components";
import { Maybe } from "../types/common";
import { Sky } from "./Sky";
import { SnowFlakes } from "./SnowFlakes";
import { Sun } from "./Sun";

const DAY_LENGTH = 3;
const IMAGE_WIDTH = 1680;

export function Hero() {
  const [containerElement, setContainerElement] = useState<Maybe<HTMLElement>>(
    null
  );

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
        <StyledImage src="mountains.png" />
      </MountainContainer>
      <TreesContainer>
        <StyledImage src="trees.png" />
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
`;

const ImageContainer = styled.div`
  width: ${IMAGE_WIDTH}px;
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

const StyledImage = styled.img`
  width: 100%;
  filter: brightness(100%);
  transition: filter ${DAY_LENGTH}s;

  &.night {
    filter: brightness(50%);
  }
`;
