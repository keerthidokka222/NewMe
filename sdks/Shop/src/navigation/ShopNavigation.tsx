import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopScreen from '../screens/ShopScreen';

type shopPathList = {
    shopscreen: undefined
}
export const ShopNavigator = () =>{
    const Stack = createStackNavigator<shopPathList>();
    return(
        <Stack.Navigator>
            <Stack.Screen name="shopscreen" component={ShopScreen} />
        </Stack.Navigator>
    )
}
export default ShopNavigator;