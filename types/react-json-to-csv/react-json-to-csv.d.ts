/// <reference path="../react/react.d.ts"

declare module 'react-json-to-csv' {
    import React = _react;
    export interface CsvDownloadProps {
        data: any;
        filename?: string;
        children?: string;
    }

    type CsvDownload<CsvDownloadProps> = (props: CsvDownloadProps) => React.;

    export default CsvDownload;
}
