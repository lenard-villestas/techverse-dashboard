import React from 'react';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import SignalStrength from './charts/SignalStrength';
import BitRates from './charts/BitRates';

const Dashboard = () => {
    const [activeChart, setActiveChart] = useState('signalChart');
    const [data, setData] = useState([]);
    const sasToken = "sp=r&st=2023-03-30T22:16:46Z&se=2023-03-31T06:16:46Z&spr=https&sv=2021-12-02&sr=b&sig=OpZTMmWXYUwf9JIChzTL%2FdTBJvqKFPyRqKxb1l%2FYe5Y%3D";
    const url = "https://techversestorage.blob.core.windows.net/techversecontainer/Samplefile.csv?" + sasToken;

    //parse CSV
    useEffect(() => {

        // Parse the CSV data
        Papa.parse('./Samplefile.csv', {
            header: true,
            download: true,
            complete: function (results) {
                //console.log(results.data)
                setData(results.data);

            },
            error: function (error) {
                console.error('Failed to parse CSV data', error);
            }
        });

    }, []);

    //chart switching
    const renderChart = () => {
        switch (activeChart) {
            case 'signalChart':
                return <SignalStrength rows={data}/>;
            case 'bitRateChart':
                return <BitRates rows={data}/>;
            case 'chart3':
                return <Chart3 />;
            // Add more cases for other charts
            default:
                return null;
        }
    };

    return (
        <>
            <h1 className='header'>Techverse Dashboard</h1>

            <nav className='chartSwitch'>
                <ul>
                    <li>
                        <button onClick={() => setActiveChart('signalChart')}>Signal Strength</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveChart('bitRateChart')}>Bitrate</button>
                    </li>
                    <li>
                        <button onClick={() => setActiveChart('chart3')}>Chart 3</button>
                    </li>
                    {/* Add more buttons for other charts */}
                </ul>
            </nav>

            <div className='chart'>
            {renderChart()}
            </div>

        </>
    );
}

export default Dashboard;
