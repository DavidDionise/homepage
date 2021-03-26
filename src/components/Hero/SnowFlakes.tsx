import React, { useState, useEffect, useMemo } from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { config } from "../../config";
import { Maybe } from "../../types/common";
import { randomInteger, random } from "../../utils/random";
import { range } from "../../utils/range";

type Props = {
  containerHeight: number;
};

export function SnowFlakes(props: Props) {
  const snowFlakes = useMemo(() => {
    return generateSnowFlakes(props.containerHeight).map((Flake, idx) => (
      <Flake key={idx} />
    ));
  }, [props.containerHeight]);
  return <>{snowFlakes}</>;
}

type StyledFlakeProps = {
  duration: number;
  animation: Keyframes;
};

const StyledFlake = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: white;
  animation: ${(p: StyledFlakeProps) => p.animation}
    ${(p: StyledFlakeProps) => p.duration}s infinite linear;
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
          animation={animations[animationIdx]}
          duration={duration}
          style={{
            left: `${initialPosition}px`,
            width: `${size}px`,
            height: `${size}px`,
            zIndex: zIndex,
          }}
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
