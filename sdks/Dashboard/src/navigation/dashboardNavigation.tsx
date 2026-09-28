import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardLandingpage from '../screens/DashboardLandingPage';
import PlanSummary from '../screens/PlanSummary';
import UserSummary from '../screens/UserSummary';
const Stack = createStackNavigator<DashboardParamList>();

export type DashboardParamList ={
    "Home":undefined,
    "PlanSummary":undefined,
    "UserSummary":undefined
}
export const DashboardNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={{
                headerBackButtonDisplayMode: 'minimal',
                headerBackImage: () => (
                    <Text style={{ fontSize: 35, paddingLeft: 15 }}>‹</Text>
                ),
            }}
        >
            <Stack.Screen name='Home' component={DashboardLandingpage}></Stack.Screen>
            <Stack.Screen name='PlanSummary' component={PlanSummary}></Stack.Screen>
            <Stack.Screen name='UserSummary' component={UserSummary}></Stack.Screen>

        </Stack.Navigator>
    )
}
export default DashboardNavigation;