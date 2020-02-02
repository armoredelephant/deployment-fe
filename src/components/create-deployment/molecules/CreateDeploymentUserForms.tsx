import React, { ReactChild, useEffect, useState } from "react";
import {
  DeploymentFormValues,
  GraphQLDeployment,
  DeploymentStatusAndOptionsProps,
  EndUserDeploymentFormField,
  IndividualDeploymentItem
} from "../deploymentCreateInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { Form, Formik, FieldArray } from "formik";
import EndUserDeploymentsFieldArray from "./EndUserDeploymentsFieldArray";
import { CreateDeploymentSchema } from "../../../formSchemas";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { flattenDeploymentData } from "../../_helper-functions/flattenDeploymentData";
import SpinnerButton from "../../_spinner/SpinnerButton";
import { PostError } from "../../../utils/customErrors";
import AddRemoveFieldsButton from "../atoms/AddRemoveFieldsButton";

const initialFormValues: DeploymentFormValues = {
  deployments: []
};

const deploymentItems: IndividualDeploymentItem = {
  product: "",
  modelType: "",
  serialNumber: ""
};

const additionalDeployment: EndUserDeploymentFormField = {
  endUser: "",
  ticketNumber: "",
  items: []
};

/**
 * Start of the deployment form. All deployment form dats is a child this component.
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
  const [initialValues, setInitialValues] = useState(initialFormValues);
  const [createDeployment] = useMutation(CREATE_DEPLOYMENT);
  const { tech } = optionsState;
  const { postError } = deploymentState;

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
    setInitialValues({ deployments: optionsState.formValues });
  }, [optionsState.formValues]);

  if (!initialValues.deployments.length) return <></>;

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
          if (!postError) deploymentDispatch({ type: "SET_POST_SUCCESSFUL" });
        }}
      >
        {({ values, isSubmitting }): ReactChild => (
          <Form>
            <FieldArray
              name="deployments"
              render={(arrayHelpers): React.ReactNode => (
                <>
                  {values.deployments.map((value, i) => {
                    return (
                      <FlexContainer key={`enduser-${i}`} flow="column">
                        <EndUserDeploymentsFieldArray
                          formValues={values}
                          deploymentIndex={i}
                          handleRemove={(): void => arrayHelpers.remove(i)}
                        />
                      </FlexContainer>
                    );
                  })}
                  <FlexContainer flow="row">
                    <AddRemoveFieldsButton
                      onClick={(): void =>
                        arrayHelpers.push({
                          ...additionalDeployment,
                          items: [{ ...deploymentItems }]
                        })
                      }
                      add={true}
                      text="Add User"
                    />
                  </FlexContainer>
                </>
              )}
            />
            <SpacingWrapper>
              <SpinnerButton
                isSubmitting={isSubmitting}
                title="Submit Deployments"
              />
            </SpacingWrapper>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </FlexContainer>
  );
};

export default CreateDeploymentUserForms;
