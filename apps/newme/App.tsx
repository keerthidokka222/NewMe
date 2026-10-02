import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './src/navigation/navigationRef';
import {AppContext, AppContextType} from './src/context/AppContext';
import {lightTheme, darkTheme} from '@newme/shared-sdk';
import { navigationHandler } from './src/navigation/NavigationHandler';

function App() {
  const appConfig: AppContextType = {
    navigationHandler,
    userConfig: {
      name: 'Keerthi',
      IsLggedIn:true
    },
    theme: lightTheme,
  };

  return (
   <AppContext.Provider value={appConfig}>
      <NavigationContainer ref={navigationRef}>
         <AppNavigation />
      </NavigationContainer>
   </AppContext.Provider>
  );
}
export default App;
