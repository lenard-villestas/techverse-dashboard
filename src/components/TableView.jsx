import React from 'react';
import { CsvToHtmlTable } from 'react-csv-to-table';
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

const TableView = () => {

  const [csvData, setCsvData] = useState(null);

  useEffect(() => {
    // Load CSV data
    Papa.parse('./Samplefile.csv', {
      header: true,
      delimiter:",",
      download: true,
      complete: function (results) {
        setCsvData(results.data);
        console.log(results.data);

      },
      error: function (error) {
        console.error('Failed to parse CSV data', error);
      }
    });
  }, []);

  

  return (
    <div>
      <CsvToHtmlTable
        //data={csvData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />        </div>
  );
}

export default TableView;
