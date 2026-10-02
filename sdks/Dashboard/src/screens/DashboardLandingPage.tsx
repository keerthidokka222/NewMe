import React from 'react';
import { View, Text, Pressable, Button } from 'react-native';
import { useDashboardContext } from '../context/DashboardContex';
const DashboardLanding =({navigation}: {navigation: {navigate: (screen: string) => void}})=>{
    const {DashboardData, userConfig, theme, navigationHandler} = useDashboardContext();
    return(
        <View>
            <Text>
                Welcome dashboard landing
            </Text>
            <Text>{DashboardData.welcomeMessage}</Text>
             <Text>{DashboardData.name}</Text>
            <Button
  onPress={() => {
    navigationHandler.navigate('PlanSummary')
  }}
  title="Press Me"
/>
        </View>
    )
}
export default DashboardLanding;