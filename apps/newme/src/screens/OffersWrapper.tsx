import React from 'react';
import {OffersSDK} from '@newme/offers-sdk';
type config ={
    text: string
}

const OffersWrapper = () =>{
    const SDKconfig: config = {
        text: ' from here we need to pass context',
    };

    return <OffersSDK {...SDKconfig}/>;
}

export default OffersWrapper;