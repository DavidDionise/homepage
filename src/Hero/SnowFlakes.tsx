import React, { useState, useEffect, useMemo } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { config } from "../config";
import { Maybe } from "../types/common";
import { randomInteger, random } from "../utils/random";
import { range } from "../utils/range";

type Props = {
  containerHeight: number;
};

export function SnowFlakes(props: Props) {
  return (
    <>
      {generateSnowFlakes(props.containerHeight).map((Flake, idx) => (
        <Flake key={idx} />
      ))}
    </>
  );
}

type StyledFlakeProps = {
  initialPosition: number;
  size: number;
  duration: number;
  animation: Keyframes;
  zIndex: number;
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
  z-index: ${(p: StyledFlakeProps) => p.zIndex};
  box-shadow: 0 0 8px #fff;
`;

function generateSnowFlakes(containerHeight: number) {
  const {
    quantity,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
  } = config.snowflakes;
  const animations = generateAnimations(containerHeight);

  return range(0, quantity).map(() => {
    const size = randomInteger(minSize, maxSize);
    const duration = random(minDuration, maxDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;

    return function SnowFlake() {
      const [flakeNode, setFlakeNode] = useState<Maybe<HTMLElement>>(null);
      const [initialPosition, setInitialPosition] = useState(
        randomInteger(0, window.innerWidth)
      );
      const zIndex = randomInteger(1, 6);

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
          zIndex={zIndex}
        />
      );
    };
  });
}

function generateAnimations(containerHeight: number) {
  const {
    numAnimations,
    minHorizontalDisplacement,
    maxHorizontalDisplacement,
  } = config.snowflakes;
  return range(0, numAnimations).map((idx) => {
    const endingX = `${idx % 2 == 0 ? "-" : ""}${randomInteger(
      minHorizontalDisplacement,
      maxHorizontalDisplacement
    )}px`;
    return keyframes`
        from {
          transform: translate(0, -20px);
        }

        to {
          transform: translate(${endingX}, ${containerHeight + 20}px)
        }
      `;
  });
}
