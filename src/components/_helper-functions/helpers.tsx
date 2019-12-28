import {
  DeploymentOptionsProps,
  EndUserDeploymentFormField,
  IndividualDeploymentItem
} from "../create-deployment/deploymentInterfaces";

// possibly create a class?

class InitialFormValues {
  endUser: string;
  ticketNumber: number;
  items: IndividualDeploymentItem[];
  constructor() {
    this.endUser = "";
    this.ticketNumber = 0;
    this.items = [];
  }
}

export const generateInitialFormValues = ({
  optionsState
}: Partial<DeploymentOptionsProps>): EndUserDeploymentFormField[] | void => {
  const maxEquipmentRemoteWithLaptop = 7;
  const maxEquipmentRemoteWithDesktop = 6;

  const vals: EndUserDeploymentFormField[] = [];

  if (!optionsState) return;

  const itemValues: IndividualDeploymentItem = {
    product: "",
    modelType: "",
    serialNumber: ""
  };

  optionsState.formCount.forEach(() => {
    const values = new InitialFormValues();
    vals.push(values);
  });

  if (optionsState.remoteSetup) {
    if (optionsState.primaryMachine === "laptop") {
      vals.forEach(enduser => {
        for (let i = 1; i <= maxEquipmentRemoteWithLaptop; i++) {
          enduser.items.push(itemValues);
        }
      });
    } else {
      vals.forEach(enduser => {
        for (let i = 1; i <= maxEquipmentRemoteWithDesktop; i++) {
          enduser.items.push(itemValues);
        }
      });
    }
  } else {
    vals.forEach(enduser => {
      enduser.items.push(itemValues);
    });
  }
  return vals;
};
