import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import { Formik, Form } from "formik";
import { DeploymentViewOptionsSchema } from "../../../formSchemas";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import CustomSelect from "../../create-deployment/atoms/CustomSelect";
import OptionsContainer from "../../_containers/OptionsContainers";
import SpinnerButton from "../../_spinner/SpinnerButton";
import { DeploymentViewOptions } from "../deploymentViewInterfaces";

/**
 * This component sontains the components that make up the options for the form
 * at the top of ViewDeploymentsPage
 */

/**
 * Needs deplotmentViewStatus props for submitting. and dispatch.
 */
const options = ["End User", "Ticket", "Product"];

const initialValues: DeploymentViewOptions = {
  selected: "",
  textToSearch: ""
};

const ViewDeploymentOptions: React.FC = () => {
  const FetchAllDeployments = (): void => {
    // set queryAttempt

    /**
     * query all deployments
     * set deploymentData
     * set querySuccessful
     */

    /**
     * catch error
     * set queryError
     */
    console.log("test");
  };

  return (
    <FlexContainer flow="column">
      <OptionsContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={DeploymentViewOptionsSchema}
          onSubmit={async (data): Promise<void> => {
            // function that taks the fields and selects schema based on fields.
            // dispatches to state so ViewDeploymentTable updates with data.
            try {
              console.log(data);
              // createMutation and dispatch success
            } catch (error) {
              console.log(error);
              // dispatch error
            }
            // if !queryError dispatch(successful table update)
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <FlexContainer flow="row">
                <CustomSelect
                  options={options}
                  name="selected"
                  title="Search By"
                />
                <RequiredTextField
                  placeholder="search"
                  name="textToSearch"
                  type="input"
                />
                <SpinnerButton isSubmitting={isSubmitting} title="Search" />
              </FlexContainer>
            </Form>
          )}
        </Formik>
        <FlexContainer margin="auto" flow="row" center="center">
          <SpinnerButton
            isSubmitting={false}
            handleClick={FetchAllDeployments}
            title="View All"
          />
        </FlexContainer>
      </OptionsContainer>
    </FlexContainer>
  );
};

export default ViewDeploymentOptions;
