import React from "react";
import FlexContainer from "../../_containers/FlexContainer";
import RequiredTextField from "../../custom-fields/RequiredTextField";
import { FormikValues, FieldArray } from "formik";
import { IndividualDeploymentItem } from "../deploymentInterfaces";
import ProductSelect from "../atoms/ProductSelect";
import AddRemoveFieldsButton from "../atoms/AddRemoveFieldsButton";
import StyledDivider from "../../_dividers/StyledDivider";
import SpacingWrapper from "../../_wrappers/SpacingWrapper";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

/**
 * This component displays the inner array of deployments for each user being deployed to.
 */

interface FieldArrayProps {
  deploymentIndex: number;
  handleRemove: () => void;
  formValues: FormikValues;
}

const EndUserDeploymentsFieldArray: React.FC<FieldArrayProps> = ({
  deploymentIndex,
  handleRemove,
  formValues
}: FieldArrayProps) => {
  if (!formValues.deployments[deploymentIndex]) return <> </>;

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
          render={(arrayHelpers): React.ReactNode => (
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
                      {formValues.deployments[deploymentIndex].items.length >
                        1 && (
                        <IconButton
                          aria-label="delete"
                          onClick={(): void => arrayHelpers.remove(index)}
                        >
                          <DeleteForeverIcon color="error" />
                        </IconButton>
                      )}
                    </FlexContainer>
                  );
                }
              )}
              <SpacingWrapper>
                <AddRemoveFieldsButton
                  onClick={(): void =>
                    arrayHelpers.push({
                      product: "",
                      modelType: "",
                      serialNumber: ""
                    })
                  }
                  add={true}
                  text="Add Deployment"
                />
                {formValues.deployments.length > 1 && (
                  <AddRemoveFieldsButton
                    onClick={handleRemove}
                    text="Remove User"
                  />
                )}
              </SpacingWrapper>
            </>
          )}
        />
      </FlexContainer>
      <StyledDivider />
    </>
  );
};

export default EndUserDeploymentsFieldArray;
