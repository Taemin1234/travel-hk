import React, { useEffect, useState } from 'react';
import data from '../data/data.json'
import * as TH from '../style/style';

import { useSelector } from "react-redux"

function InfoList({category}) {
    let loca = useSelector((state) => state.location)

    const [datas, setDatas] = useState(null);
    const [dataKo, setDataKo] = useState(null);
    const district = loca

    useEffect(() => {
        if (data[district] && data[district][category]) {
            setDatas(data[district][category]);
            setDataKo(data[district].k_name);
        } else {
            setDatas(null);
        }
      }, [district, category]);
    
      if (!datas) return <TH.InfoListWrap>지역을 선택해주세요</TH.InfoListWrap>;

      console.log(datas)

    return (
        <TH.InfoListWrap>
            <p className='title'>{dataKo}</p>
           <TH.InfoDataList>
                {datas.map(el => {
                    return (
                        <li key={el.id}>
                            <p className='name'>{el.id}. {el.name}</p>
                            <TH.ContBox>
                                <TH.ImgCont>
                                    <img src={el.img} alt={el.name} />
                                    <div>
                                        {el.star ? <p>별이? {el.star}</p> : null}
                                        {el.price ? <p>가격은? {el.price}</p> : null}
                                        {el.cuisine ? <p>요리는? {el.cuisine}</p> : null}
                                        {el.sub_title ? <p>{el.sub_title}</p> : null}
                                    </div>
                                </TH.ImgCont>
                                <p>{el.des}</p>
                            </TH.ContBox>
                        </li>
                    )
                })}
           </TH.InfoDataList>
        </TH.InfoListWrap>
    )    
}

export default InfoList