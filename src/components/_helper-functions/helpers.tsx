import {
  DeploymentOptionsProps,
  EndUserDeploymentFormField,
  IndividualDeploymentItem
} from "../create-deployment/deploymentInterfaces";

// possibly create a class?

class InitialFormValues {
  endUser: string;
  ticketNumber: number | string;
  items: IndividualDeploymentItem[];
  constructor() {
    this.endUser = "";
    this.ticketNumber = "";
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

  // const initialFormValues: EndUserDeploymentFormField = {
  //   endUser: "",
  //   ticketNumber: "",
  //   items: []
  // };

  optionsState.formCount.forEach(() => {
    const values = new InitialFormValues();
    // const values = initialFormValues;
    vals.push(values);
  });

  if (optionsState.remoteSetup) {
    if (optionsState.primaryMachine === "laptop") {
      vals.forEach(enduser => {
        console.log(enduser);
        for (let i = 1; i <= maxEquipmentRemoteWithLaptop; i++) {
          console.log(enduser.items);
          enduser.items.push(itemValues);
        }
      });
    } else {
      console.log(vals);
      for (let i = 0; i < vals.length; i++) {
        for (let num = 1; num <= maxEquipmentRemoteWithDesktop; num++) {
          console.log(vals[i]);
          vals[i].items.push(itemValues);
        }
      }
    }
  } else {
    vals.forEach(enduser => {
      enduser.items.push(itemValues);
    });
  }
  return vals;
};
