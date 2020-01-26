import React from "react";
import styled from "styled-components";

interface Props {
  flow: string;
  margin?: string;
}

const SimplyFlexContainer = styled.div<Props>`
  display: flex;
  flex-flow: ${(props: Props): string => props.flow};
  margin: ${(props: Props): string | undefined => props.margin};
`;

const FlexContainer: React.FC<Props> = (props: Props) => {
  return <SimplyFlexContainer {...props} />;
};

export default FlexContainer;
