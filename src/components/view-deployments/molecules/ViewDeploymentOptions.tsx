import React, { ReactChild } from "react";
import FlexContainer from "../../_containers/FlexContainer";
import { Formik, Form } from "formik";
import { DeploymentViewOptionsSchema } from "../../../formSchemas";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import CustomSelect from "../../create-deployment/atoms/CustomSelect";
import OptionsContainer from "../../_containers/OptionsContainers";
import SpinnerButton from "../../_spinner/SpinnerButton";
import { DeploymentViewOptionsAndStatusProps } from "../deploymentViewInterfaces";
import { deploymentViewOptionsInitialState } from "../../../immer/initialStates";

/**
 * This component sontains the components that make up the options for the form
 * at the top of ViewDeploymentsPage
 */

const options = ["Enduser", "Ticket", "Product"];

const ViewDeploymentOptions: React.FC<DeploymentViewOptionsAndStatusProps> = ({
  viewDispatch,
  optionsDispatch
}: DeploymentViewOptionsAndStatusProps) => {
  const resetOptionsView = async (): Promise<void> => {
    await viewDispatch({ type: "RESET_DEPLOYMENT_VIEW_STATUS" });
    await optionsDispatch({ type: "RESET_DEPLOYMENT_VIEW_OPTIONS" });
  };

  return (
    <FlexContainer flow="column">
      <OptionsContainer>
        <Formik
          initialValues={deploymentViewOptionsInitialState}
          validationSchema={DeploymentViewOptionsSchema}
          onSubmit={async (data): Promise<void> => {
            await optionsDispatch({
              type: "SET_DEPLOYMENT_VIEW_OPTIONS",
              selected: data.selected,
              textToSearch: data.textToSearch
            });
          }}
        >
          {({ isSubmitting }): ReactChild => (
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
              <FlexContainer margin="auto" flow="row" center="center">
                <SpinnerButton
                  isSubmitting={false}
                  handleClick={resetOptionsView}
                  title="View All"
                />
              </FlexContainer>
            </Form>
          )}
        </Formik>
      </OptionsContainer>
    </FlexContainer>
  );
};

export default ViewDeploymentOptions;
