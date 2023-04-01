import React from 'react';
import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import Papa from 'papaparse';
import { useRef } from 'react';

const LineChart = () => {

    const chartRef = useRef(null);
    const [csvData, setCsvData] = useState(null);

    useEffect(() => {
        // Parse the CSV data
        Papa.parse('./Samplefile.csv', {
          header: true,
          download: true,
          complete: function(results) {
            console.log(results.data)
            setCsvData(results.data);
          },
          error: function(error) {
            console.error('Failed to parse CSV data', error);
          }
        });
      }, []);
    
      useEffect(() => {
        if (csvData) {
          // Destroy any existing chart
          if (chartRef.current) {
            chartRef.current.destroy();
          }
    
          // Create the chart using Chart.js
          var ctx = document.getElementById('myChart').getContext('2d');
          chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
              labels: csvData.map(function(row) { return row.SSID; }),
              datasets: [{
                label: 'Signal Strength',
                data: csvData.map(function(row) { return row.Signal; }),
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
              }]
            },
            options: {
                plugins: {},
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  r: {}
                }
            }
          });
        }
    
        // Cleanup function that destroys the chart on unmount
        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
          }
        };
      }, []); // Run only once on component mount

    return (
        <div>
            <canvas id="myChart" style={{margin:"1px", width: "100%", height: "100%" }}></canvas>
        </div>
    );
}

export default LineChart;
