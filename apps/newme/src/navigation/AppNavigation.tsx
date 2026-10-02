import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeWrapper from '../screens/HomeWrapper';
import ShopWrapper from '../screens/ShopWrapper';
import OffersWrapper from '../screens/OffersWrapper';
import TopPicksWrapper from '../screens/TopPicksWrapper';
import WishlistWrapper from '../screens/WishlistWrapper';
import {TabParemList} from './tabnavigationTypes';


const Tab = createBottomTabNavigator<TabParemList>();

export default function AppNavigation() {
  return (
    <Tab.Navigator
    screenOptions={{
       "headerShown": false,
    }}
    >
      <Tab.Screen name="HOME" component={HomeWrapper} />
      <Tab.Screen name="SHOP" component={ShopWrapper} />
      <Tab.Screen name="OFFERS" component={OffersWrapper} />
      <Tab.Screen name="TOP PICKS" component={TopPicksWrapper}/>
      <Tab.Screen name="WISHLIST" component={WishlistWrapper}/>
    </Tab.Navigator>
  );
}