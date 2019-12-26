import styled from "styled-components";

interface Props {
  content: string;
}

const MainContainer = styled.main`
  width: 100%;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  justify-content: ${(props: Props): string => props.content};
  align-items: center;
`;

export default MainContainer;
