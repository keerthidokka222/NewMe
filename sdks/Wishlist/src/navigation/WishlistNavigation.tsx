import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WishlistScreen from '../screens/WishlistScreen';

export const WishlistRoutes = {
    wishlist:undefined
}
export type WishlistParamList = typeof WishlistRoutes;
export const WishlistNavigation = () =>{
    const Stack = createStackNavigator<WishlistParamList>();
    return(
        <Stack.Navigator>
            <Stack.Screen name="wishlist" component={WishlistScreen}/>
        </Stack.Navigator>
    )
}
export default WishlistNavigation;