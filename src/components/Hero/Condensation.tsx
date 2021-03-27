import React, { ReactElement, useEffect, useMemo, useState } from "react";
import styled, {
  Keyframes,
  keyframes,
  StyledComponent,
} from "styled-components";
import { config } from "../../config";
import { Maybe } from "../../types/common";
import { randomInteger, random } from "../../utils/random";
import { range } from "../../utils/range";
import { CondensationType } from "../MasterOfWeather";

type StyledComponentProps = {
  duration: number;
  animation: Keyframes;
  delay: number;
  [key: string]: any;
};

type Props = {
  containerHeight: number;
  type: CondensationType;
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledComponentProps>,
    {}
  >;
};

export function Condensation(props: Props) {
  const snowFlakes = useMemo(() => {
    return generateCondensation(
      props.containerHeight,
      props.type,
      props.styledComponent
    );
  }, []);
  return <>{snowFlakes}</>;
}

type DropProps = {
  animation: Keyframes;
  duration: number;
  size: number;
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledComponentProps>,
    {}
  >;
};

function Drop(props: DropProps) {
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
    <props.styledComponent
      ref={setDropNode}
      animation={props.animation}
      duration={props.duration}
      style={{
        left: `${initialPosition}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
        zIndex: zIndex,
      }}
    />
  );
}

function generateCondensation(
  containerHeight: number,
  type: CondensationType,
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledComponentProps>,
    {}
  >
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
  const quantity = randomInteger(minQuantity, maxQuantity);

  return range(0, quantity).map((_, idx) => {
    const size = randomInteger(minSize, maxSize);
    const duration = random(minFallDuration, maxFallDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;
    return (
      <Drop
        key={idx}
        animation={animations[animationIdx]}
        size={size}
        duration={duration}
        styledComponent={styledComponent}
      />
    );
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
