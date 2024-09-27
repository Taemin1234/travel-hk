import React from 'react';
import * as TH from '../style/style';

import { useSelector } from "react-redux"

function InfoList({category}) {
    let loca = useSelector((state) => state.location)

    return (
        <div>
           {loca}
           {category}
        </div>
    )    
}

export default InfoList