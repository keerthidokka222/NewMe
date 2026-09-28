import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WishlistScreen from '../screens/WishlistScreen';

type wishlisPathList = {
    wishlist:undefined
}

export const WishlistNavigation = () =>{
    const Stack = createStackNavigator<wishlisPathList>();
    return(
        <Stack.Navigator>
            <Stack.Screen name="wishlist" component={WishlistScreen}/>
        </Stack.Navigator>
    )
}
export default WishlistNavigation;