import React from 'react';
import * as TH from '../style/style';

import Map from "./Map"
import InfoList from './InfoList';

function TravelInfo({category}) {

    return (
        <TH.InfoWrap>
           <Map/>
           <InfoList category={category}/>
        </TH.InfoWrap>
    )    
}

export default TravelInfo