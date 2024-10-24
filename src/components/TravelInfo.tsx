import * as TH from '../style/style';

import Map from "./Map"
import InfoList from './InfoList';

interface TravelInfoProps {
    category:string,
    toggleList:number,
    setToggleList:React.Dispatch<React.SetStateAction<number>>
}

function TravelInfo({category, toggleList, setToggleList}:TravelInfoProps) {
    return (
        <TH.InfoWrap>
           <Map setToggleList={setToggleList} />
           <InfoList category={category} toggleList={toggleList} setToggleList={setToggleList}/>
        </TH.InfoWrap>
    )    
}

export default TravelInfo