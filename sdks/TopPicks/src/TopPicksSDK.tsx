import React from 'react';
import TopPicksNavigation from './navigation/TopPicksNavigation';

 type sdkconfig ={
    text:string;
}
export const TopPicksSDK = (config:sdkconfig) =>{
    return <TopPicksNavigation />
}
export default TopPicksSDK;