import React from 'react';
import {TopPicksSDK} from '@newme/toppicks-sdk'

type config ={
    text:string
}
const TopPicksWrapper = () => {
    const SDKconfig: config = {
        text: ' from here we need to pass context',
    };
    return <TopPicksSDK {...SDKconfig}/>
  
}
export default TopPicksWrapper;