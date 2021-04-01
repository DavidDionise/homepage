import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../App";
import { config } from "../../config";
import { Maybe } from "../../types/common";

export type ProjectProps = {
  title: string;
  description: string;
  href: string;
};

export function Project(props: ProjectProps) {
  const [hrElement, setHrElement] = useState<Maybe<HTMLHRElement>>(null);
  const [showHr, setShowHr] = useState(false);
  const appContext = useContext(AppContext);

  useEffect(() => {
    function handler() {
      if (hrElement && appContext.appRef) {
        const { y } = hrElement.getBoundingClientRect();
        if (y < window.innerHeight) {
          setShowHr(true);
        }
      }
    }

    if (appContext.appRef && !showHr) {
      appContext.appRef.addEventListener("scroll", handler);
    }

    return () => {
      if (appContext.appRef && !showHr) {
        appContext.appRef.removeEventListener("scroll", handler);
      }
    };
  }, [appContext.appRef, hrElement, showHr]);

  return (
    <Container>
      <TitleContainer>
        <Title target="_blank" href={props.href}>
          {props.title}
        </Title>
        <StyledHr ref={setHrElement} className={showHr ? "show" : ""} />
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionCopy>{props.description}</DescriptionCopy>
      </DescriptionContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  position: relative;
  border-radius: 8px;
  background-color: #fff;
  padding: 0.5em;

  &::before {
    content: "";
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    z-index: -1;
    top: -2px;
    left: -2px;
    border-radius: 10px;
    background: linear-gradient(
      -45deg,
      ${config.ui.colors.primary.light},
      ${config.ui.colors.primary.med}
    );
  }
`;

const TitleContainer = styled.div`
  width: fit-content;
`;

const Title = styled.a`
  font-family: ${config.ui.fonts.title};
  text-decoration: none;
  color: ${config.ui.colors.primary.dark};
  font-weight: bold;
  font-size: 1.5em;
`;

const StyledHr = styled.hr`
  margin: 0;
  width: 0;
  border: solid ${config.ui.colors.secondary.med} 2px;
  transition: width 2.5s;
  opacity: 0;

  &.show {
    opacity: 1;
    width: 100%;
  }
`;

const DescriptionContainer = styled.div``;

const DescriptionCopy = styled.p`
  font-family: ${config.ui.fonts.regular};
  color: ${config.ui.colors.primary.dark};
`;
