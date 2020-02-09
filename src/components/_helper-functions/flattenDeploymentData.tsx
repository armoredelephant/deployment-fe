import {
  EndUserDeploymentFormField,
  GraphQLDeployment
} from "../create-deployment/deploymentCreateInterfaces";

interface DeploymentMutationProps {
  deploymentData: EndUserDeploymentFormField;
  techName: string;
  techId: number;
}

export const flattenDeploymentData = ({
  deploymentData,
  techName,
  techId
}: DeploymentMutationProps): GraphQLDeployment[] => {
  const { endUser, ticketNumber, items } = deploymentData;
  const date = new Date();
  const timestamp = `${date.getMonth() +
    1}-${date.getDate()}-${date.getFullYear()}`;
  const toBeDeployed = items.map(deploymentValues => {
    return {
      ...deploymentValues,
      endUser: endUser,
      ticketNumber: parseInt(ticketNumber),
      techName: techName,
      timeStamp: timestamp,
      techId: techId
    };
  });
  return toBeDeployed;
};
