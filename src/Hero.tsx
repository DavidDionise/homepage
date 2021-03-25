import React from "react";
import styled, { keyframes } from "styled-components";
import { config } from "./config";
import { random, randomInteger } from "./utils/random";
import { range } from "./utils/range";

export function Hero() {
  return (
    <Container>
      {SnowFlakes.map((Flake, idx) => (
        <Flake key={idx} />
      ))}
      <MountainsContainer>
        <StyledImage src="mountains.png" />
      </MountainsContainer>
      <TreesContainer>
        <StyledImage src="trees.png" />
      </TreesContainer>
    </Container>
  );
}

function generateAnimations() {
  const {
    numAnimations,
    minHorizontalDisplacement,
    maxHorizontalDisplacement,
  } = config.snowflakes;
  return range(0, numAnimations).map(
    (idx) =>
      keyframes`
        from {
          transform: translate(0, 0);
        }

        to {
          transform: translate(
            ${idx % 2 == 0 ? "-" : ""}${randomInteger(
        minHorizontalDisplacement,
        maxHorizontalDisplacement
      )}px,
            100vh
          )
        }
      `
  );
}

const Container = styled.div`
  position: relative;
  max-width: 1680px;
  margin: auto;
  height: 1000px;
  background: violet;
  overflow: ignore;
`;

const MountainsContainer = styled.div`
  width: 100%;
`;

const TreesContainer = styled.div`
  position: absolute;
  top: 350px;
  width: 100%;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const SnowFlakes = (function () {
  const {
    quantity,
    minSize,
    maxSize,
    minDuration,
    maxDuration,
  } = config.snowflakes;
  const animations = generateAnimations();

  return range(0, quantity).map(() => {
    const size = randomInteger(minSize, maxSize);
    const duration = random(minDuration, maxDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;
    const initialPosition = randomInteger(0, window.innerWidth);

    return styled.div`
      position: absolute;
      left: ${initialPosition}px;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background-color: white;
      animation: ${animations[animationIdx]} ${duration}s infinite linear;
      z-index: 2;
      box-shadow: 0 0 8px #fff;
    `;
  });
})();
