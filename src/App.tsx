import "./App.css";
import { Hero } from "./components/Hero/Hero";
import React, { useState } from "react";
import { MasterOfTime } from "./components/Hero/MasterOfTime";
import { MasterOfWeather } from "./components/Hero/MasterOfWeather";
import { ProjectsContainer } from "./components/Projects/ProjectsContainer";
import styled from "styled-components";
import { Maybe } from "./types/common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { config } from "./config";

type AppContextType = {
  appRef: Maybe<HTMLDivElement>;
};

export const AppContext = React.createContext<AppContextType>({
  appRef: null,
});

function App() {
  const [appContainerElement, setAppContainerElement] = useState<
    Maybe<HTMLDivElement>
  >(null);

  return (
    <AppContainer ref={setAppContainerElement}>
      <AppInnerContainer>
        <AppContext.Provider value={{ appRef: appContainerElement }}>
          <MasterOfTime>
            <MasterOfWeather>
              <Hero />
            </MasterOfWeather>
          </MasterOfTime>
          <ProjectsContainer />
        </AppContext.Provider>
      </AppInnerContainer>
      <AppFooter>
        <a href="https://twitter.com/dionisio_dav" target="_blank">
          <StyledIcon
            color={config.ui.colors.primary.med}
            icon={faTwitter}
            size="lg"
          />
        </a>
        <AppFooterIconSeparator />
        <a
          href="https://www.linkedin.com/in/david-dionise-259502b0/"
          target="_blank"
        >
          <StyledIcon
            color={config.ui.colors.primary.med}
            icon={faLinkedin}
            size="lg"
          />
        </a>
      </AppFooter>
    </AppContainer>
  );
}

const AppInnerContainer = styled.div`
  max-width: 1680px;
  position: relative;
  margin: auto;
`;

const AppContainer = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
`;

const AppFooter = styled.footer`
  padding: 2em 45%;
  display: flex;
  justify-content: space-around;
`;

const AppFooterIconSeparator = styled.span`
  width: 2px;
  line-height: 100%;
  background-color: ${config.ui.colors.primary.med};
`;

const StyledIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${config.ui.colors.secondary.med};
  }
`;

export default App;
