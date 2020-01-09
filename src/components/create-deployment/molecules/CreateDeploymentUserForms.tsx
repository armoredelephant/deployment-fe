import React, { ReactChild, useEffect } from "react";
import {
  DeploymentOptionsProps,
  DeploymentFormValues,
  EndUserDeploymentFormField,
  GraphQLDeployment
} from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { Form, Formik } from "formik";
import EndUserDeploymentsFieldArray from "./EndUserDeploymentsFieldArray";
import StyledDivider from "../../_dividers/StyledDivider";
import { CreateDeploymentSchema } from "../../../formSchemas";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import Button from "@material-ui/core/Button";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { flattenDeploymentData } from "../../_helper-functions/flattenDeploymentData";

const initialValues: DeploymentFormValues = {
  deployments: []
};

const CREATE_DEPLOYMENT = gql`
  mutation CreateDeployment($data: DeploymentGraphQLInput!) {
    createDeployment(deployment: $data) {
      id
      techName
      endUser
      product
      modelType
      serialNumber
      timeStamp
      techId
      ticketNumber
    }
  }
`;

// need timeStamp
// need ticketNumber to be parsed

const CreateDeploymentUserForms: React.FC<DeploymentOptionsProps> = ({
  optionsState
}: DeploymentOptionsProps) => {
  const [createDeployment] = useMutation(CREATE_DEPLOYMENT);
  const { tech } = optionsState;

  const createDeploymentMutation = async (
    gqlMutationData: GraphQLDeployment[]
  ): Promise<void> => {
    for (const deploymentData of gqlMutationData) {
      try {
        await createDeployment({
          variables: {
            data: deploymentData
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (initialValues.deployments.length !== optionsState.formValues.length) {
      initialValues.deployments = [...optionsState.formValues];
    }
  }, [optionsState.formValues]);
  return (
    <FlexContainer flow="row">
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={CreateDeploymentSchema}
        onSubmit={(data): void => {
          data.deployments.forEach(
            (deploymentData: EndUserDeploymentFormField) => {
              const gqlMutationData = flattenDeploymentData({
                deploymentData,
                tech
              });
              console.log(gqlMutationData);
              // createDeploymentMutation(gqlMutationData);
            }
          );
        }}
      >
        {({ values }): ReactChild => (
          <Form>
            {initialValues.deployments.map((value, i) => {
              return (
                <FlexContainer key={`enduser-${i}`} flow="column">
                  <EndUserDeploymentsFieldArray formValues={values} ind={i} />
                  <StyledDivider />
                </FlexContainer>
              );
            })}
            <SpacingWrapper>
              <Button variant="contained" type="submit">
                Submit Deployments
              </Button>
            </SpacingWrapper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </FlexContainer>
  );
};

export default CreateDeploymentUserForms;
