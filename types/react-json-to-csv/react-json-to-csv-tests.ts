import React from "react";
import CsvDownload from "react-json-to-csv";

const mockData = {
  test: "data"
};

const AComponent: React.FC = () => {
  return <CsvDownload data={mockData} />;
};
