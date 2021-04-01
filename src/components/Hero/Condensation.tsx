import React, { useEffect, useMemo, useState } from "react";
import { Keyframes, keyframes, StyledComponent } from "styled-components";
import { ConditionalType } from "typescript";
import { CondensationConfig, config } from "../../config";
import { Maybe } from "../../types/common";
import { randomInteger, random } from "../../utils/random";
import { range } from "../../utils/range";
import { CondensationType, WeatherType } from "./MasterOfWeather";

export type StyledCondensationProps = {
  duration: number;
  animation: Keyframes;
  delay: number;
  [key: string]: any;
};

type Props = {
  containerHeight: number;
  type: CondensationType;
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledCondensationProps>,
    {}
  >;
};

export function Condensation(props: Props) {
  const condensation = useMemo(() => {
    return generateCondensation(
      props.containerHeight,
      props.type,
      props.styledComponent
    );
  }, [props.containerHeight, props.type, props.styledComponent]);
  return <>{condensation}</>;
}

type DropProps = {
  animation: Keyframes;
  duration: number;
  width: number;
  height: number;
  delay: number;
  type: CondensationType;
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledCondensationProps>,
    {}
  >;
};

function Drop(props: DropProps) {
  const [dropNode, setDropNode] = useState<Maybe<HTMLElement>>(null);
  const [initialXPosition, setInitialXPosition] = useState(
    randomInteger(0, window.innerWidth)
  );

  useEffect(() => {
    function handler() {
      setInitialXPosition(random(0, window.innerWidth));
    }

    if (dropNode) {
      dropNode.addEventListener("animationiteration", handler);
    }

    return () => dropNode?.addEventListener("animationiteration", handler);
  }, [dropNode]);

  const backgroundColor = generateHsl(config.condensation[props.type]);
  const opacity = generateOpacity(config.condensation[props.type]);

  return (
    <props.styledComponent
      ref={setDropNode}
      animation={props.animation}
      duration={props.duration}
      delay={props.delay}
      style={{
        left: `${initialXPosition}px`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        transform: `translateY(-${props.height + 20}px`,
        backgroundColor: backgroundColor,
        opacity: opacity,
      }}
    />
  );
}

function generateCondensation(
  containerHeight: number,
  type: CondensationType,
  styledComponent: StyledComponent<
    React.FunctionComponent<StyledCondensationProps>,
    {}
  >
) {
  const {
    dimensions,
    minQuantity,
    maxQuantity,
    minFallDuration,
    maxFallDuration,
    maxDelay,
  } = config.condensation[type];
  const animations = generateAnimations(containerHeight, type);
  const quantity = randomInteger(minQuantity, maxQuantity);

  return range(0, quantity).map((_, idx) => {
    const dimensionsIdx = randomInteger(0, dimensions.length - 1);
    const { width, height } = dimensions[dimensionsIdx];
    const duration = random(minFallDuration, maxFallDuration);
    const animationIdx = randomInteger(1, animations.length) - 1;
    const delay = random(0, maxDelay);

    return (
      <Drop
        key={idx}
        animation={animations[animationIdx]}
        width={width}
        height={height}
        duration={duration}
        type={type}
        delay={delay}
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
    const endingX = `${idx % 2 === 0 ? "-" : ""}${randomInteger(
      minHorizontalDisplacement,
      maxHorizontalDisplacement
    )}px`;

    return keyframes`
        from {
          transform: translate(0, -150px);
        }

        to {
          transform: translate(${endingX}, ${containerHeight + 20}px)
        }
      `;
  });
}

function generateOpacity(condensationConfig: CondensationConfig) {
  const { minOpacity, maxOpacity } = condensationConfig;

  return minOpacity != null ? random(minOpacity, maxOpacity || minOpacity) : 1;
}

function generateHsl(condensationConfig: CondensationConfig) {
  const {
    minHue,
    maxHue,
    minSaturation,
    maxSaturation,
    minLightness,
    maxLightness,
  } = condensationConfig;
  const hueValue = minHue != null ? random(minHue, maxHue || minHue) : 0;
  const saturationValue =
    minSaturation != null
      ? random(minSaturation, maxSaturation || minSaturation)
      : 0;
  const lightnessValue =
    minLightness != null
      ? random(minLightness, maxLightness || minLightness)
      : 100;

  return `hsl(${hueValue}, ${saturationValue}%, ${lightnessValue}%)`;
}
