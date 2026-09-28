import React from 'react';
import ShopNavigator from './navigation/ShopNavigation';
type ShopSDKconfig ={
    text: string
}
export const ShopSDK = (config:ShopSDKconfig)=>{
    return <ShopNavigator/>
}
export default ShopSDK;