import {
  EndUserDeploymentFormField,
  GraphQLDeployment
} from "../create-deployment/deploymentCreateInterfaces";

interface DeploymentMutationProps {
  deploymentData: EndUserDeploymentFormField;
  tech: string;
}

export const flattenDeploymentData = ({
  deploymentData,
  tech
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
      techName: tech,
      timeStamp: timestamp,
      techId: 1
    };
  });
  return toBeDeployed;
};
