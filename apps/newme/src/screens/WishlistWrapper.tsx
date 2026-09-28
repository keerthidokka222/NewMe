import React from 'react';
import {WishlistSDK} from '@newme/wishlist-sdk'
type config ={
    text:string
}
const WishlistWrapper = () =>{
    const SDKconfig: config = {
        text: ' from here we need to pass context',
    };
    return <WishlistSDK {...SDKconfig} />
}
export default WishlistWrapper;