import {
  EndUserDeploymentFormField,
  IndividualDeploymentItem
} from "../create-deployment/deploymentCreateInterfaces";

interface Props {
  userCount: string;
  remoteSetup: boolean;
  techName: string;
  primaryMachine: string;
}

interface DeploymentOptionsFormValues {
  data: Props;
  userCountArray: string[];
}

export const generateInitialFormValues = ({
  data,
  userCountArray
}: DeploymentOptionsFormValues): EndUserDeploymentFormField[] | void => {
  const maxEquipmentRemoteWithLaptop = 7;
  const maxEquipmentRemoteWithDesktop = 6;

  const forms: EndUserDeploymentFormField[] = [];

  const sliceCount = parseInt(data.userCount);

  const formCount: string[] = userCountArray.slice(0, sliceCount);

  if (!data) return;

  const itemValues: IndividualDeploymentItem = {
    product: "",
    modelType: "",
    serialNumber: "",
    asset: ""
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

  formCount.forEach(() => {
    const initialFormValue = { ...initialFormValues, items: [] };
    forms.push(initialFormValue);
  });

  if (data.remoteSetup) {
    if (data.primaryMachine === "laptop") {
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
