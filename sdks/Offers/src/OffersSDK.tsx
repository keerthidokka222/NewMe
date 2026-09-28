import React from 'react';
import {OffersNavigation} from './navigation/OffersNavigation';

type navConfig = {
    text:string
}
export const OffersSDK = (config: navConfig) =>{
    return <OffersNavigation/>
}
export default OffersSDK;
