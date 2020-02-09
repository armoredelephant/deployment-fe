import React from "react";
import { Formik, Form } from "formik";
import Button from "@material-ui/core/Button";
import { CreateTechSchema } from "../../../formSchemas";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import FlexContainer from "../../_containers/FlexContainer";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { CreateTechStatusProps } from "../createTechInterfaces";

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

const CreateTechForm: React.FC<CreateTechStatusProps> = ({
  statusDispatch
}: CreateTechStatusProps) => {
  const [createTech] = useMutation(CREATE_TECH);
  const initialValues: FormValues = {
    firstName: "",
    lastName: ""
  };
  return (
    <FlexContainer flow="row">
      <Formik
        initialValues={initialValues}
        validationSchema={CreateTechSchema}
        onSubmit={async (data, { resetForm }): Promise<void> => {
          const techName = `${data.firstName} ${data.lastName}`;

          try {
            await createTech({
              variables: {
                data: techName
              }
            });
            await resetForm({ values: initialValues });
            await statusDispatch({ type: "SET_POST_SUCCESSFUL" });
          } catch (error) {
            console.log(error);
            await statusDispatch({ type: "SET_POST_ERROR" });
          }
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
    </FlexContainer>
  );
};

export default CreateTechForm;
