import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { config } from "../config";
import { Maybe } from "../types/common";
import { random, randomInteger } from "../utils/random";
import { range } from "../utils/range";
import { Sky } from "./Sky";
import { SnowFlakes } from "./SnowFlakes";

const DAY_LENGTH = 3;
const IMAGE_WIDTH = 1680;

export function Hero() {
  const [containerElement, setContainerElement] = useState<Maybe<HTMLElement>>(
    null
  );
  const [isNightTime, setIsNightTime] = useState(false);

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setIsNightTime(!isNightTime);
  //   }, DAY_LENGTH * 1000 * 2);

  //   return () => clearTimeout(timerId);
  // }, [isNightTime]);

  return (
    <Container ref={setContainerElement}>
      <SkyContainer>
        <Sky />
      </SkyContainer>
      {/* <SunContainer className={isNightTime ? "rotate" : ""}>
        <Sun />
      </SunContainer> */}
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

const SunContainer = styled.div`
  position: absolute;
  top: 720px;
  width: ${IMAGE_WIDTH * 2}px;
  height: ${IMAGE_WIDTH * 2}px;
  left: -${IMAGE_WIDTH / 2}px;
  transform: rotate(0deg);
  transition: transform 4s;
  z-index: 3;

  &.rotate {
    transform: rotate(90deg);
  }
`;

const Sun = styled.div`
  width: 50px;
  height: 50px;
  background-color: yellow;
  box-shadow: 0 0 8px yellow;
  border-radius: 50%;
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
