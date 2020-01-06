import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import { FormikValues, FieldArray } from "formik";
import { IndividualDeploymentItem } from "../deploymentInterfaces";
import ProductSelect from "../atoms/ProductSelect";

/**
 * Computer = Computer
 * Network Device = Network Device
 * Other = Other Configuration Item
 * Phone = Telephony Equipment
 */

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
                  return (
                    <FlexContainer key={`deployment-${index}`} flow="row">
                      <ProductSelect
                        name={`deployments[${ind}].items[${index}].product`}
                      />
                      <RequiredTextField
                        placeholder="model"
                        name={`deployments[${ind}].items[${index}].modelType`}
                      />
                      <RequiredTextField
                        placeholder="serial number"
                        name={`deployments[${ind}].items[${index}].serialNumber`}
                      />
                    </FlexContainer>
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
