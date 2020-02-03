import { gql } from "apollo-boost";

const ENDUSER_QUERY = gql`
  query FindDeploymentByField($option: String!) {
    findDeploymentsByField(endUser: $option) {
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

const TICKET_QUERY = gql`
  query FindDeploymentByField($option: String!) {
    findDeploymentsByField(ticketNumber: $option) {
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

const PRODUCT_QUERY = gql`
  query FindDeploymentByField($option: String!) {
    findDeploymentsByField(product: $option) {
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

const ALL_QUERY = gql`
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const querySelector = (selected?: string): any => {
  switch (selected) {
    case "Enduser":
      return ENDUSER_QUERY;
    case "Ticket":
      return TICKET_QUERY;
    case "Product":
      return PRODUCT_QUERY;
    case "All":
      return ALL_QUERY;
  }
};
