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

const DAY_LENGTH = 3;
const IMAGE_WIDTH = 1680;

export function Hero() {
  const [containerNode, setcontainerNode] = useState<Maybe<HTMLElement>>(null);
  const [isNightTime, setIsNightTime] = useState(false);

  const SnowFlakes = useMemo(() => {
    if (containerNode) {
      const height = containerNode.clientHeight;
      return generateSnowFlakes(height);
    } else {
      return [];
    }
  }, [containerNode]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsNightTime(!isNightTime);
    }, DAY_LENGTH * 1000 * 2);

    return () => clearTimeout(timerId);
  }, [isNightTime]);

  return (
    <Container ref={setcontainerNode} className={isNightTime ? "night" : ""}>
      <SunContainer className={isNightTime ? "rotate" : ""}>
        <Sun />
      </SunContainer>
      {/* {SnowFlakes.map((Flake, idx) => (
        <Flake key={idx} />
      ))} */}
      <MountainContainer>
        <StyledImage
          src="mountains.png"
          className={isNightTime ? "night" : ""}
        />
      </MountainContainer>
      <TreesContainer>
        <StyledImage src="trees.png" className={isNightTime ? "night" : ""} />
      </TreesContainer>
    </Container>
  );
}

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

function generateSnowFlakes(parentElementHeight: number) {
  const {
    quantity,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
  } = config.snowflakes;
  const animations = generateAnimations(parentElementHeight);

  return range(0, quantity).map(() => {
    const size = randomInteger(minSize, maxSize);
    const duration = random(minDuration, maxDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;

    return function SnowFlake() {
      const [flakeNode, setFlakeNode] = useState<Maybe<HTMLElement>>(null);
      const [initialPosition, setInitialPosition] = useState(
        randomInteger(0, window.innerWidth)
      );

      useEffect(() => {
        function handler() {
          setInitialPosition(randomInteger(0, window.innerWidth));
        }

        if (flakeNode) {
          flakeNode.addEventListener("animationiteration", handler);
        }

        return () => flakeNode?.addEventListener("animationiteration", handler);
      }, [flakeNode]);

      return (
        <StyledFlake
          ref={setFlakeNode}
          initialPosition={initialPosition}
          size={size}
          duration={duration}
          animation={animations[animationIdx]}
        />
      );
    };
  });
}

function generateAnimations(height: number) {
  const {
    numAnimations,
    minHorizontalDisplacement,
    maxHorizontalDisplacement,
  } = config.snowflakes;
  return range(0, numAnimations).map(
    (idx) =>
      keyframes`
        from {
          transform: translate(0, -20px);
        }

        to {
          transform: translate(
            ${idx % 2 == 0 ? "-" : ""}${randomInteger(
        minHorizontalDisplacement,
        maxHorizontalDisplacement
      )}px,
            ${height + 40}px
          )
        }
      `
  );
}

const Container = styled.div`
  position: relative;
  max-width: 1680px;
  margin: auto;
  height: 884px;
  transition: background-color ${DAY_LENGTH}s;
  background-color: hsl(217, 100%, 87%);

  &.night {
    background-color: hsl(217, 31%, 21%);
  }
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
`;

const StyledImage = styled.img`
  width: 100%;
  filter: brightness(100%);
  transition: filter ${DAY_LENGTH}s;

  &.night {
    filter: brightness(50%);
  }
`;

type StyledFlakeProps = {
  initialPosition: number;
  size: number;
  duration: number;
  animation: Keyframes;
};

const StyledFlake = styled.div`
  position: absolute;
  left: ${(p: StyledFlakeProps) => p.initialPosition}px;
  width: ${(p: StyledFlakeProps) => p.size}px;
  height: ${(p: StyledFlakeProps) => p.size}px;
  border-radius: 50%;
  background-color: white;
  animation: ${(p: StyledFlakeProps) => p.animation}
    ${(p: StyledFlakeProps) => p.duration}s infinite linear;
  z-index: 2;
  box-shadow: 0 0 8px #fff;
`;
