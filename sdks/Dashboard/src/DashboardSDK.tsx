import React from 'react';
import DashboardNavigation from './navigation/DashboardNavigation'
import { DashboardContextConfig, defaultDashboardContextConfig } from './types/DashboardContexConfig';
import { DashboardContext } from './context/DashboardContex';
import { ContextConfig } from '@newme/shared-sdk';
export const DashboardSDK = (config: ContextConfig)=>{
    const {userConfig, theme, navigationHandler} = config;
    const DashboardContextConfig: DashboardContextConfig = {
            DashboardData: defaultDashboardContextConfig.DashboardData,
            userConfig,
            theme,
            navigationHandler
    }

    return (<DashboardContext.Provider value={DashboardContextConfig}>
        <DashboardNavigation />
    </DashboardContext.Provider>)
}
export default DashboardSDK