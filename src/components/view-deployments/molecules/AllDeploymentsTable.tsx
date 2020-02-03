import React from "react";
import { useQuery } from "@apollo/react-hooks";
import FlexContainer from "../../_containers/FlexContainer";
import { gql } from "apollo-boost";

const VIEW_ALL_DEPLOYMENTS = gql`
  query {
    findDeployments {
      endUser
      techName
      product
      modelType
      serialNumber
      timeStamp
      ticketNumber
    }
  }
`;

const AllDeploymentsTable: React.FC = () => {
  const { loading, error, data } = useQuery(VIEW_ALL_DEPLOYMENTS);

  console.log(data);
  return (
    <FlexContainer flow="row">
      <> </>
    </FlexContainer>
  );
};

export default AllDeploymentsTable;
