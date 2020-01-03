import {
  DeploymentOptionsProps,
  EndUserDeploymentFormField,
  IndividualDeploymentItem
} from "../create-deployment/deploymentInterfaces";

export const generateInitialFormValues = ({
  optionsState
}: Partial<DeploymentOptionsProps>): EndUserDeploymentFormField[] | void => {
  const maxEquipmentRemoteWithLaptop = 7;
  const maxEquipmentRemoteWithDesktop = 6;

  const forms: EndUserDeploymentFormField[] = [];

  if (!optionsState) return;

  const itemValues: IndividualDeploymentItem = {
    product: "",
    modelType: "",
    serialNumber: ""
  };

  const initialFormValues: EndUserDeploymentFormField = {
    endUser: "",
    ticketNumber: "",
    items: []
  };

  optionsState.formCount.forEach(() => {
    // const values = new InitialFormValues();
    // const values = initialFormValues;
    const initialFormValue = { ...initialFormValues, items: [] }
    forms.push(initialFormValue);
  });

  if (optionsState.remoteSetup) {
    if (optionsState.primaryMachine === "laptop") {
      forms.forEach(endUser => {
        for (let i = 1; i <= maxEquipmentRemoteWithLaptop; i++) {
          endUser.items.push({ ...itemValues });
        }
      });
    } else {
      forms.forEach(endUser => {
        for (let num = 1; num <= maxEquipmentRemoteWithDesktop; num++) {
          endUser.items.push({ ...itemValues });
        }
      })
    }
  } else {
    forms.forEach(enduser => {
      console.log('enduser', enduser, itemValues)
      enduser.items.push({ ...itemValues });
    });
  }
  return forms;
};
