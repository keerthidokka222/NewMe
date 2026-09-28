import 'react-native-gesture-handler';
import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
function App() {
  return (
   <NavigationContainer>
      <AppNavigation />
   </NavigationContainer>
  );
}
export default App;
