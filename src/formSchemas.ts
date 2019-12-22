import * as yup from "yup";

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
    .required("Last name is required")
});
