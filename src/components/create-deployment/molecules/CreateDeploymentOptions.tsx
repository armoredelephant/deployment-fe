import React, { ReactChild } from "react";
import FlexContainer from "../../_containers/FlexContainer";
import {
  DeploymentCreateOptionsProps,
  GraphQLTech
} from "../deploymentCreateInterfaces";
import PrimaryMachineRadio from "../atoms/PrimaryMachineRadio";
import OptionsContainer from "../../_containers/OptionsContainers";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import SpinnerContainer from "../../_containers/SpinnerContainer";
import OptionsSnackbar from "../atoms/OptionsSnackbar";
import { Form, Formik } from "formik";
import CustomSelect from "../atoms/CustomSelect";
import SpinnerButton from "../../_spinner/SpinnerButton";
import RemoteCheckbox from "../atoms/RemoteCheckbox";
import { generateInitialFormValues } from "../../_helper-functions/helpers";
import { CreateDeploymentOptionsSchema } from "../../../formSchemas";

const ALL_TECHS = gql`
  query {
    findAllTechs {
      id
      name
    }
  }
`;

/**
 * This component contains the components that make up the options for the form
 * Located at the top of the CreateDeploymentPage.
 */

const CreateDeploymentOptions: React.FC<DeploymentCreateOptionsProps> = ({
  optionsDispatch,
  optionsState
}: DeploymentCreateOptionsProps) => {
  const { loading, error, data } = useQuery(ALL_TECHS);
  const { showSnackbar } = optionsState;

  if (error) {
    optionsDispatch({ type: "SET_QUERY_ERROR" });
    return (
      <FlexContainer height="100%" flow="row">
        <OptionsSnackbar
          showSnackbar={showSnackbar}
          optionsDispatch={optionsDispatch}
        />
      </FlexContainer>
    );
  }

  if (loading) {
    return <SpinnerContainer />;
  }

  const { findAllTechs } = data;

  const initialValues = {
    userCount: "",
    remoteSetup: false,
    primaryMachine: "igel",
    techName: ""
  };

  const userCountArray: string[] = [];
  for (let i = 1; i <= 20; i++) {
    userCountArray.push(`${i}`);
  }

  const techNames: string[] = findAllTechs.map(
    (tech: GraphQLTech) => tech.name
  );
  return (
    <FlexContainer flow="column">
      <OptionsContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={CreateDeploymentOptionsSchema}
          enableReinitialize={true}
          onSubmit={async (data): Promise<void> => {
            await optionsDispatch({ type: "RESET" });

            const matchedTech = findAllTechs.find(
              (tech: GraphQLTech) => data.techName === tech.name
            );

            const techId = matchedTech.id;

            const initialFormValues = await generateInitialFormValues({
              data,
              userCountArray
            });

            if (initialFormValues) {
              await optionsDispatch({
                type: "SET_INITIAL_FORM_VALUES",
                formValues: initialFormValues,
                techName: data.techName,
                techId: techId
              });
            }
          }}
        >
          {({ values, isSubmitting }): ReactChild => (
            <Form>
              <FlexContainer flow="column">
                <FlexContainer mb="0" flow="row">
                  <OptionsContainer>
                    <CustomSelect
                      options={userCountArray}
                      name="userCount"
                      title="User Count"
                    />
                    <RemoteCheckbox
                      name="remoteSetup"
                      remoteSetup={values.remoteSetup}
                      title="Remote Setup"
                    />
                  </OptionsContainer>
                  <OptionsContainer center="center">
                    <PrimaryMachineRadio
                      name="primaryMachine"
                      primaryMachine={values.primaryMachine}
                    />
                  </OptionsContainer>
                </FlexContainer>
                <FlexContainer center="center" flow="row">
                  <CustomSelect
                    options={techNames}
                    name="techName"
                    title="Deployment Tech"
                  />
                  <SpinnerButton
                    isSubmitting={isSubmitting}
                    title="Generate Form"
                  />
                </FlexContainer>
              </FlexContainer>
            </Form>
          )}
        </Formik>
      </OptionsContainer>
    </FlexContainer>
  );
};

export default CreateDeploymentOptions;
