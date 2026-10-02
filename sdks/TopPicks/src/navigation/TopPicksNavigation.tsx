import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopPicksScreen from '../screens/TopPicksScreen';
export const TopPicksRoutes = {
    TopPicks: undefined
};
export type TopPicksParamList = typeof TopPicksRoutes;
export const TopPicksNavigation= () =>{
    const Stack= createStackNavigator<TopPicksParamList>();
    return (
        <Stack.Navigator initialRouteName='TopPicks'>
            <Stack.Screen name='TopPicks' component={TopPicksScreen}/>
        </Stack.Navigator>
    )
}
export default TopPicksNavigation;