import React from 'react';
import WishlistNavigation from './navigation/WishlistNavigation';
type sdkconfig ={
    text:string;
}
export const WishlistSDK = ( config: sdkconfig)=>{
    return <WishlistNavigation />
}