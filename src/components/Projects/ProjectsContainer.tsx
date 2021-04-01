import styled from "styled-components";
import { config } from "../../config";
import projects from "../../resources/projects.json";
import { Project, ProjectProps } from "./Project";

export function ProjectsContainer() {
  return (
    <Container>
      <HeadingContainer>
        <StyledHeading>
          Open Source Projects <AmpersandContainer>&</AmpersandContainer>{" "}
          Contributions
        </StyledHeading>
      </HeadingContainer>
      <ProjectListContainer>
        {(projects as Array<ProjectProps>).map((props) => (
          <Project {...props} />
        ))}
      </ProjectListContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 24px;
`;

const HeadingContainer = styled.div`
  width: fit-content;
`;

const StyledHeading = styled.h2`
  font-family: ${config.ui.fonts.title};
  color: ${config.ui.colors.primary.med};
  margin: 0;
  font-size: 2em;
`;

const AmpersandContainer = styled.span`
  color: ${config.ui.colors.secondary.med};
`;

const ProjectListContainer = styled.div`
  padding-top: 3em;
  height: 600px; // temp style
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;