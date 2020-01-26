import React, { useEffect } from "react";
import FlexContainer from "../../_containers/FlexContainer";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import { FormikValues, FieldArray } from "formik";
import { IndividualDeploymentItem } from "../deploymentInterfaces";
import ProductSelect from "../atoms/ProductSelect";
import AddSingleDeploymentButton from "../atoms/AddSingleDeploymentButton";

/**
 * Computer = Computer
 * Network Device = Network Device
 * Other = Other Configuration Item
 * Phone = Telephony Equipment
 */

interface FieldArrayProps {
  deploymentIndex: number;
  formValues: FormikValues;
}

const EndUserDeploymentsFieldArray: React.FC<FieldArrayProps> = ({
  deploymentIndex,
  formValues
}: FieldArrayProps) => {
  return (
    <>
      <FlexContainer flow="row">
        <RequiredTextField
          placeholder="enduser"
          name={`deployments[${deploymentIndex}].endUser`}
          type="input"
        />
        <RequiredTextField
          placeholder="ticket number"
          name={`deployments[${deploymentIndex}].ticketNumber`}
          type="input"
        />
      </FlexContainer>
      <FlexContainer flow="column">
        <FieldArray
          name={`deployments[${deploymentIndex}].items`}
          render={arrayHelpers => (
            <>
              {formValues.deployments[deploymentIndex].items.map(
                (val: IndividualDeploymentItem, index: number) => {
                  return (
                    <FlexContainer key={`deployment-${index}`} flow="row">
                      <ProductSelect
                        name={`deployments[${deploymentIndex}].items[${index}].product`}
                      />
                      <RequiredTextField
                        placeholder="model"
                        name={`deployments[${deploymentIndex}].items[${index}].modelType`}
                      />
                      <RequiredTextField
                        placeholder="serial number"
                        name={`deployments[${deploymentIndex}].items[${index}].serialNumber`}
                      />
                    </FlexContainer>
                  );
                }
              )}
            </>
          )}
        />
      </FlexContainer>
      <AddSingleDeploymentButton deploymentIndex={deploymentIndex} />
    </>
  );
};

export default EndUserDeploymentsFieldArray;
