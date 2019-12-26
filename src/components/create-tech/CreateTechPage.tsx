/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from "react";
import MainContainer from "../_containers/MainContainer";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import { CreateTechSchema } from "../../formSchemas";
import RequiredTextField from "../custom-fields/RequiredTextField";
import SpacingWrapper from "../_wrappers/SpacingWrapper";
import FlexContainer from "../_containers/FlexContainer";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

/**
 * This component will be used for the create tech page.
 * It will be under Admin from the nav list.
 * It is a form with frist/last name fields
 * creates a tech in database on submit.
 */

interface FormValues {
  firstName: string;
  lastName: string;
}

const CREATE_TECH = gql`
  mutation CreateTech($data: String!) {
    createTech(name: $data) {
      id
      name
    }
  }
`;

const CreateTechPage: React.FC = () => {
  const [createTech] = useMutation(CREATE_TECH);
  const initialValues: FormValues = {
    firstName: "",
    lastName: ""
  };

  return (
    <MainContainer content="center">
      <Formik
        initialValues={initialValues}
        validationSchema={CreateTechSchema}
        onSubmit={(data, { resetForm }): void => {
          const techName = `${data.firstName} ${data.lastName}`;
          createTech({
            variables: {
              data: techName
            }
          });
          resetForm({ values: initialValues });
        }}
      >
        {() => (
          <Form>
            <FlexContainer flow="row">
              <RequiredTextField
                placeholder="first name"
                name="firstName"
                type="input"
              />
              <RequiredTextField
                placeholder="last name"
                name="lastName"
                type="input"
              />
              <SpacingWrapper>
                <Button variant="contained" type="submit">
                  Add
                </Button>
              </SpacingWrapper>
            </FlexContainer>
          </Form>
        )}
      </Formik>
    </MainContainer>
  );
};

export default CreateTechPage;
