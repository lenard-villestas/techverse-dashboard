import React from 'react';
import LineChart from './LineChart';
import TableView from './TableView';
import { useEffect,useState } from 'react';
const Dashboard = () => {

    const sasToken = "sp=r&st=2023-03-30T22:16:46Z&se=2023-03-31T06:16:46Z&spr=https&sv=2021-12-02&sr=b&sig=OpZTMmWXYUwf9JIChzTL%2FdTBJvqKFPyRqKxb1l%2FYe5Y%3D";
    const url = "https://techversestorage.blob.core.windows.net/techversecontainer/Samplefile.csv?" + sasToken;
    
    return (
        <div>
            <h1 className='header'>Techverse Dashboard</h1>
            {/*<LineChart></LineChart>*/}
            {/*<TableView></TableView>*/}
        </div>
    );
}

export default Dashboard;
