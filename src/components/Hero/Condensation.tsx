import React, {
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  RefCallback,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import { config } from "../../config";
import { Maybe } from "../../types/common";
import { randomInteger, random } from "../../utils/random";
import { range } from "../../utils/range";
import { CondensationType } from "../MasterOfWeather";

type Props = {
  containerHeight: number;
  type: CondensationType;
  css: string;
};

type StyledDropProps = {
  duration: number;
  animation: Keyframes;
};

export function Condensation(props: Props) {
  const snowFlakes = useMemo(() => {
    return generateCondensation(
      props.containerHeight,
      props.type,
      props.css
    ).map((Drop, idx) => <Drop key={idx} />);
  }, [props.containerHeight]);
  return <>{snowFlakes}</>;
}

function generateCondensation(
  containerHeight: number,
  type: CondensationType,
  css: string
) {
  const {
    minQuantity,
    maxQuantity,
    minSize,
    maxSize,
    minFallDuration,
    maxFallDuration,
  } = config.condensation[type];
  const animations = generateAnimations(containerHeight, type);

  const StyledDrop = styled.div`
    ${css}
    position: absolute;
    animation: ${(p: StyledDropProps) => p.animation}
      ${(p: StyledDropProps) => p.duration}s infinite linear;
  `;

  return range(minQuantity, maxQuantity).map(() => {
    const size = randomInteger(minSize, maxSize);
    const duration = random(minFallDuration, maxFallDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;

    return function Drop() {
      const [dropNode, setDropNode] = useState<Maybe<HTMLElement>>(null);
      const [initialPosition, setInitialPosition] = useState(
        randomInteger(0, window.innerWidth)
      );
      const zIndex = randomInteger(1, 6);

      useEffect(() => {
        function handler() {
          setInitialPosition(randomInteger(0, window.innerWidth));
        }

        if (dropNode) {
          dropNode.addEventListener("animationiteration", handler);
        }

        return () => dropNode?.addEventListener("animationiteration", handler);
      }, [dropNode]);

      return (
        <StyledDrop
          ref={setDropNode}
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

function generateAnimations(containerHeight: number, type: CondensationType) {
  const {
    numAnimations,
    minHorizontalDisplacement,
    maxHorizontalDisplacement,
  } = config.condensation[type];
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
