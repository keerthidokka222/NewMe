import React from 'react';
import  { DashboardSDK}  from '@newme/dashboard-sdk';
import { useAppContext } from '../context/AppContext';
type config ={
    text: string
}

const HomeWrapper = () => {
    const { userConfig, theme, navigationHandler } = useAppContext();
    const SDKconfig= {
        userConfig,
        theme,
        navigationHandler
    };

    return <DashboardSDK {...SDKconfig}/>;
};

export default HomeWrapper;