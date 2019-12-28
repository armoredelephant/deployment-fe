import React, { ReactChild, useEffect, useState } from "react";
import {
  DeploymentOptionsProps,
  DeploymentFormValues
} from "../deploymentInterfaces";
import FlexContainer from "../../_containers/FlexContainer";
import { Form, Formik } from "formik";
import EndUserDeploymentsFieldArray from "./EndUserDeploymentsFieldArray";

// Nothing actually needs to be handled by state? just handle in submit?

// add button to add a new deployment for the endUSer

// const CREATE_DEPLOYMENT
const CreateDeploymentUserForms: React.FC<DeploymentOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentOptionsProps) => {
  const [initialValues, setInitialValues] = useState({
    deployments: [...optionsState.formValues]
  });

  useEffect(() => {
    setInitialValues({
      deployments: [...optionsState.formValues]
    });
    // if (initialValues.deployments.length !== optionsState.formValues.length) {
    //   initialValues.deployments = [...optionsState.formValues];
    // }
  }, [optionsState]);
  console.log(initialValues);
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
                <EndUserDeploymentsFieldArray
                  formValues={values}
                  key={i}
                  ind={i}
                />
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
