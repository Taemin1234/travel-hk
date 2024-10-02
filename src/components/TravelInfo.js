import React, { useState } from 'react';
import * as TH from '../style/style';

import Map from "./Map"
import InfoList from './InfoList';

function TravelInfo({category}) {
    const [toggleList, setToggleList] = useState(0)

    return (
        <TH.InfoWrap>
           <Map toggleList={toggleList} setToggleList={setToggleList} />
           <InfoList category={category} toggleList={toggleList} setToggleList={setToggleList}/>
        </TH.InfoWrap>
    )    
}

export default TravelInfo