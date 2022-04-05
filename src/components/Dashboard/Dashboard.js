import React from 'react';
import MyAreaChart from '../AreaChart/AreaChart';
import MyChart from '../MyLineChart/MyLineChart';

const Dashboard = () => {
    return (
        <div className='h-full bg-gray-100'>
            <MyChart></MyChart>
            <MyAreaChart></MyAreaChart>
        </div>
    );
};

export default Dashboard;