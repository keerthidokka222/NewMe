import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ShopScreen from '../screens/ShopScreen';

export const ShopRoutes = {
    shopscreen: undefined
}
export type ShopParamList = typeof ShopRoutes;
export const ShopNavigator = () =>{
    const Stack = createStackNavigator<ShopParamList>();
    return(
        <Stack.Navigator>
            <Stack.Screen name="shopscreen" component={ShopScreen} />
        </Stack.Navigator>
    )
}
export default ShopNavigator;