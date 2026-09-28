import React from 'react';
import DashboardNavigation from '../src/navigation/dashboardNavigation'
type config ={
    text: string
}
export const DashboardSDK = (config: config)=>{

    return <DashboardNavigation />
}
export default DashboardSDK