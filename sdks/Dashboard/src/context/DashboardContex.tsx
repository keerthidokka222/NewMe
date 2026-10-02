import { DashboardContextConfig} from "../types/DashboardContexConfig";

import React, { createContext, useContext } from 'react';
export const DashboardContext = createContext<DashboardContextConfig |null>(null);
export const useDashboardContext =() =>{
    const context =useContext(DashboardContext);

    if (!context) {
        throw new Error('useDashboardContext must be used within DashboardContext.Provider');
    }

    return context;
}