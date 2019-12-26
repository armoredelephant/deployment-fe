import React from "react";
import styled from "styled-components";

interface Props {
  flow: string;
}

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-flow: ${(props: Props): string => props.flow};
`;

const SimplyFlexContainer: React.FC<Props> = (props: Props) => {
  return <FlexContainer {...props} />;
};

export default SimplyFlexContainer;
