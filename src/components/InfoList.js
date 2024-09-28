import React, { useEffect, useState } from 'react';
import data from '../data/data.json'
import * as TH from '../style/style';

import { useSelector } from "react-redux"

function InfoList({category}) {
    let loca = useSelector((state) => state.location)

    const [datas, setDatas] = useState(null);
    const district = loca

    useEffect(() => {
        if (data[district] && data[district][category]) {
            setDatas(data[district][category]);
        } else {
            setDatas(null);
        }
      }, [district, category]);
    
      if (!datas) return <div>지역을 선택해주세요</div>;

      console.log(datas)

    return (
        <div>
           {loca}
           {category}
        </div>
    )    
}

export default InfoList