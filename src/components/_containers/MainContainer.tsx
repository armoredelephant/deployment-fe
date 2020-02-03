import styled from "styled-components";

interface Props {
  content: string;
}

const MainContainer = styled.main`
  min-width: 56.25rem;
  width: 100%;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  justify-content: ${(props: Props): string => props.content};
  align-items: center;
  margin: 0 0.625rem;
`;

export default MainContainer;
