import React, { useEffect, useState } from 'react';
import data from '../data/data.json'
import * as TH from '../style/style';

import { useSelector } from "react-redux"
import LikeShortcut from './LikeShortcut';

interface InfoListProps {
    category:string,
    toggleList: number,
    setToggleList : React.Dispatch<React.SetStateAction<number>>
}
interface DataItem {
    id:number,
    name: string;
    img?: string;
    star?: string;
    price?: string;
    cuisine?: string;
    sub_title?: string;
    des?: string;
}
interface DistrictData {
    [district: string]: {
        k_name: string;
        hotels?: DataItem[];
        restaurant?: DataItem[];
        cafe?: DataItem[];
        pub?: DataItem[];
        sites?: DataItem[];
    }
}

function InfoList({category, toggleList, setToggleList}:InfoListProps) {
    let loca = useSelector((state: any) => state.location);
    
    const [datas, setDatas] = useState<DataItem[] | null>(null);
    const [dataKo, setDataKo] = useState<string | null>(null);
    
    const district = loca

    useEffect(() => {
        const districtData = data as DistrictData;
        if (districtData[district] && districtData[district][category]) {
            setDatas(districtData[district][category]);
            setDataKo(districtData[district].k_name);
        } else {
            setDatas(null);
        }
    }, [district, category]);
    
    if (!datas) return <TH.InfoListWrap>지역을 선택해주세요</TH.InfoListWrap>;

    const handleOpen = (idx:number) => {
        setToggleList((prevIdx) => (prevIdx === idx ? prevIdx : idx))
    }

    // console.log(datas)

    return (
        <TH.InfoListWrap>
            <p className='title'>{dataKo}</p>
           <TH.InfoDataList>
                {datas.map((el, i) => {
                    return (
                        <li onClick={() => handleOpen(i)} key={i}>
                            <TH.NameTag listOpen={toggleList === i}>
                                {i+1}. {el.name}
                                {/* {toggleList === i ? <LikeShortcut likeLeng={el.name || ''} /> : null} */}
                                <LikeShortcut likeLeng={el.name || ''} />
                            </TH.NameTag>
                            <TH.ContBox listOpen={toggleList === i}>
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