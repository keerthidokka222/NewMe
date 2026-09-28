import React from 'react';
import {ShopSDK} from '@newme/shop-sdk'
type config ={
    text: string
}

const ShopWrapper = () =>{
    const SDKconfig: config = {
        text: ' from here we need to pass context',
    };

    return <ShopSDK {...SDKconfig}/>;
}

export default ShopWrapper;