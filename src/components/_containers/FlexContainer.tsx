import React from "react";
import styled from "styled-components";

interface Props {
  center?: string;
  flow: string;
  margin?: string;
  marginBottom?: string;
  width?: string;
  height?: string;
}

const SimplyFlexContainer = styled.div<Props>`
  display: flex;
  flex-flow: ${(props: Props): string => props.flow};
  margin: ${(props: Props): string | undefined => props.margin};
  justify-content: ${(props: Props): string | undefined =>
    props.center && "center"};
  margin-bottom: ${(props: Props): string | undefined => props.marginBottom};
  width: ${(props: Props): string | undefined => props.width};
  height: ${(props: Props): string | undefined => props.height};
`;

const FlexContainer: React.FC<Props> = (props: Props) => {
  return <SimplyFlexContainer {...props} />;
};

export default FlexContainer;
