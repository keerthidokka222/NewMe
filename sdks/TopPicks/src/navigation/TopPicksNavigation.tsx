import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopPicksScreen from '../screens/TopPicksScreen';
type TopPicksPathList ={
    TopPicks:undefined
}
export const TopPicksNavigation= () =>{
    const Stack= createStackNavigator<TopPicksPathList>();
    return (
        <Stack.Navigator initialRouteName='TopPicks'>
            <Stack.Screen name='TopPicks' component={TopPicksScreen}/>
        </Stack.Navigator>
    )
}
export default TopPicksNavigation;