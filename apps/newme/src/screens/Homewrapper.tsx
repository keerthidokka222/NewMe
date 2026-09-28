import React from 'react';
import  { DashboardSDK}  from '@newme/dashboard-sdk';
type config ={
    text: string
}

const HomeWrapper = () => {
    const SDKconfig: config = {
        text: ' from here we need to pass context',
    };

    return <DashboardSDK {...SDKconfig}/>;
};

export default HomeWrapper;