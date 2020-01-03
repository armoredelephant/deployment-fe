import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import { FormikValues, FieldArray } from "formik";
import { IndividualDeploymentItem } from "../deploymentInterfaces";

interface FieldArrayProps {
  ind: number;
  formValues: FormikValues;
}

const EndUserDeploymentsFieldArray: React.FC<FieldArrayProps> = ({
  ind,
  formValues
}: FieldArrayProps) => {
  return (
    <>
      <FlexContainer flow="row">
        <RequiredTextField
          placeholder="enduser"
          name={`deployments[${ind}].endUser`}
          type="input"
        />
        <RequiredTextField
          placeholder="ticket number"
          name={`deployments[${ind}].ticketNumber`}
          type="input"
        />
      </FlexContainer>
      <FlexContainer flow="column">
        <FieldArray
          name={`deployments[${ind}].items`}
          render={arrayHelpers => (
            <>
              {formValues.deployments[ind].items.map(
                (val: IndividualDeploymentItem, index: number) => {
                  const rdmKey = Math.random()
                    .toString(36)
                    .substring(7);
                  return (
                    <RequiredTextField
                      key={rdmKey}
                      placeholder="product"
                      name={`deployments[${ind}].items[${index}].product`}
                    />
                  );
                }
              )}
            </>
          )}
        />
      </FlexContainer>
    </>
  );
};

export default EndUserDeploymentsFieldArray;
