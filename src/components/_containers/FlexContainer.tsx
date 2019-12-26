import React from "react";
import styled from "styled-components";

interface Props {
  flow: string;
}

const SimplyFlexContainer = styled.div<Props>`
  display: flex;
  flex-flow: ${(props: Props): string => props.flow};
`;

const FlexContainer: React.FC<Props> = (props: Props) => {
  return <SimplyFlexContainer {...props} />;
};

export default FlexContainer;
