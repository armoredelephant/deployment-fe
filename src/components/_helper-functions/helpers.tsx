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

  const laptopDeployment = [
    "Computer",
    "Other",
    "Other",
    "Network Device",
    "Other",
    "Other",
    "Phone"
  ];

  optionsState.formCounts.forEach(() => {
    const initialFormValue = { ...initialFormValues, items: [] };
    forms.push(initialFormValue);
  });

  if (optionsState.remoteSetup) {
    if (optionsState.primaryMachine === "laptop") {
      forms.forEach(endUser => {
        for (let i = 0; i < maxEquipmentRemoteWithLaptop; i++) {
          endUser.items.push({ ...itemValues, product: laptopDeployment[i] });
        }
      });
    } else {
      const desktopDeployment = [...laptopDeployment];

      desktopDeployment.splice(1, 1);

      forms.forEach(endUser => {
        for (let i = 0; i < maxEquipmentRemoteWithDesktop; i++) {
          endUser.items.push({ ...itemValues, product: desktopDeployment[i] });
        }
      });
    }
  } else {
    forms.forEach(enduser => {
      enduser.items.push({ ...itemValues });
    });
  }
  return forms;
};
