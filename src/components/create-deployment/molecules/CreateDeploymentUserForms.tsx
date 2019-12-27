import React, { ReactChild, useEffect } from "react";
import {
  DeploymentOptionsProps,
  DeploymentFormValues
} from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { Form, Formik } from "formik";
import RequiredTextField from "../../custom-fields/RequiredTextField";

// Nothing actually needs to be handled by state? just handle in submit?

// const CREATE_DEPLOYMENT
const initialValues: DeploymentFormValues = {
  deployments: []
};

const CreateDeploymentUserForms: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
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
        onSubmit={(data): void => console.log(data)}
      >
        {({ values }): ReactChild => (
          <Form>
            {initialValues.deployments.map((value, i) => {
              return (
                <FlexContainer flow="row" key={i}>
                  <RequiredTextField
                    placeholder="enduser"
                    name={`deployments[${i}].endUser`}
                    type="input"
                  />
                </FlexContainer>
              );
            })}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </FlexContainer>
  );
};

export default CreateDeploymentUserForms;
