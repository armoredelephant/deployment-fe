import React, { ReactChild, useEffect } from "react";
import {
  DeploymentFormValues,
  GraphQLDeployment,
  DeploymentStatusAndOptionsProps
} from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { Form, Formik } from "formik";
import EndUserDeploymentsFieldArray from "./EndUserDeploymentsFieldArray";
import StyledDivider from "../../_dividers/StyledDivider";
import { CreateDeploymentSchema } from "../../../formSchemas";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { flattenDeploymentData } from "../../_helper-functions/flattenDeploymentData";
import SpinnerButton from "../../_spinner/SpinnerButton";
import { PostError } from "../../../utils/customErrors";

const initialValues: DeploymentFormValues = {
  deployments: []
};

/**
 * techName and techId will have to be pulled from gql
 */

const CREATE_DEPLOYMENT = gql`
  mutation CreateDeployment($data: DeploymentInput!) {
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

const CreateDeploymentUserForms: React.FC<DeploymentStatusAndOptionsProps> = ({
  optionsState,
  deploymentState,
  deploymentDispatch
}: DeploymentStatusAndOptionsProps) => {
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
        throw new PostError(error);
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
        onSubmit={async (data): Promise<void> => {
          for (const deploymentData of data.deployments) {
            const gqlMutationData = await flattenDeploymentData({
              deploymentData,
              tech
            });
            console.log(gqlMutationData);
            try {
              await createDeploymentMutation(gqlMutationData);
            } catch (error) {
              console.log(error);
              deploymentDispatch({ type: "SET_POST_ERROR" });
            }
          }
        }}
      >
        {({ values, isSubmitting }): ReactChild => (
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
              <SpinnerButton isSubmitting={isSubmitting} />
            </SpacingWrapper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </FlexContainer>
  );
};

export default CreateDeploymentUserForms;
