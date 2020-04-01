import { Column } from "../deploymentViewInterfaces";

export const columns: Column[] = [
  {
    id: "ticketNumber",
    label: "Ticket Number",
    minWidth: 100,
    align: "left"
  },
  {
    id: "endUser",
    label: "End User",
    minWidth: 100,
    align: "left"
  },
  {
    id: "product",
    label: "Product",
    minWidth: 100,
    align: "left"
  },
  {
    id: "modelType",
    label: "Model",
    minWidth: 100,
    align: "left"
  },
  {
    id: "serialNumber",
    label: "Serial",
    minWidth: 100,
    align: "left"
  },
  {
    id: "asset",
    label: "Asset",
    minWidth: 100,
    align: "left"
  },
  {
    id: "timeStamp",
    label: "Deployed On",
    minWidth: 100,
    align: "left"
  },
  {
    id: "techName",
    label: "Tech",
    minWidth: 100,
    align: "left"
  }
];
