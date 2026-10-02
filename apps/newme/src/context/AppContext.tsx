import { AppTheme, MemberInfo, NavigationHandler } from "@newme/shared-sdk";

import React, { createContext, useContext } from 'react';

export type AppContextType = {
    userConfig: MemberInfo;
    theme: AppTheme;
    navigationHandler: NavigationHandler;
};

export const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useAppContext must be used within AppContext.Provider');
  }

  return context;
};