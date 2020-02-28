import React from "react";
import CsvDownload from "react-json-to-csv";
import { makeStyles } from "@material-ui/core/styles";

interface Props {
  data: object[] | null;
}

const useStyles = makeStyles({
  downloadButton: {
    display: "inline-flex",
    padding: "6px 16px",
    fontSize: "0.875rem",
    minWidth: "64px",
    lineHeight: 1.75,
    borderRadius: "4px",
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
    color: "rgba(0, 0, 0, 0.87)",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: 500,
    backgroundColor: "#e0e0e0",
    border: "none",
    textDecorationLine: "none",
    margin: 0,
    alignItems: "center",
    position: "relative",
    textDecoration: "none",
    alignSelf: "flex-start",
    marginTop: "11px",
    marginBottom: "11px",
    cursor: "pointer",
    "&:active": {
      outline: "none",
      textDecoration: "none"
    },
    "&:focus": {
      outline: "none",
      textDecoration: "none"
    }
  }
});

const DownloadButton: React.FC<Props> = ({ data }: Props) => {
  const { downloadButton } = useStyles();
  return <CsvDownload className={downloadButton} data={data} />;
};

export default DownloadButton;
