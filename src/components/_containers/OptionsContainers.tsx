import React from "react";
import styled from "styled-components";

interface Props {
  bottomMargin?: string;
  noTopMargin?: string;
  center?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: ${(props: Props): string | undefined => props.center};
  flex-flow: column;
  align-items: flex-start;
  margin: 1.25rem 1.25rem 1.25rem;
  margin-bottom: ${(props: Props): string | undefined => props.bottomMargin};
  margin-top: ${(props: Props): string | undefined => props.noTopMargin};
`;

const OptionsContainer: React.FC<Props> = (props: Props) => {
  return <Container {...props} />;
};

export default OptionsContainer;
