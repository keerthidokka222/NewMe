import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OffersScren from '../screens/OffersScreen';
export const OffersNavigation = () =>{
const Stack = createStackNavigator();

    return(
        <Stack.Navigator initialRouteName="Offers">
            <Stack.Screen name="Offers" component={OffersScren} />
        </Stack.Navigator>
    )
}
export default OffersNavigation;