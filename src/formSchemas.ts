import * as yup from "yup";

/**
 * yup schema for create tech form
 */
export const CreateTechSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "First name is too short.")
    .max(20, "First name is too long.")
    .required("First name is required."),
  lastName: yup
    .string()
    .min(2, "Last name is too short.")
    .max(25, "Last name is too long.")
    .required("Last name is required.")
});

/**
 * yup schema for the itemValues that's stored in items.
 */
const DeploymentItemValues = yup.object().shape({
  product: yup.string().required(),
  modelType: yup
    .string()
    .min(2, "Invalid model type.")
    .max(20, "Invalid model type.")
    .required(),
  serialNumber: yup
    .string()
    .min(5, "Invalid serial number.")
    .max(35, "Invalid serial number.")
    .required()
});

/**
 * yup schema for create deployment form
 */
export const DeploymentInitialFormValues = yup.object().shape({
  endUser: yup
    .string()
    .min(2, "Enduser's name is too short.")
    .max(30, "Enduser's name is too long.")
    .required("Enduser is required."),
  ticketNumber: yup
    .string()
    .min(7, "Invalid ticket number.")
    .max(10, "Invalid ticket number.")
    .required("Ticket number is required."),
  items: yup
    .array()
    .of(DeploymentItemValues)
    .required()
});

export const CreateDeploymentSchema = yup.object().shape({
  deployments: yup.array().of(DeploymentInitialFormValues)
});

export const DeploymentViewOptionsSchema = yup.object().shape({
  selected: yup.string().required(),
  textToSearch: yup.string().required()
});
