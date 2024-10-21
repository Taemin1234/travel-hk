import * as TH from '../style/style'

import IconBed from '../assets/img/icon/ico-bed.png'
import IconBuilding from '../assets/img/icon/ico-building.png'
import IconCafe from '../assets/img/icon/ico-cafe.png'
import IconPub from '../assets/img/icon/ico-pub.png'
import IconRest from '../assets/img/icon/ico-restaurant.png'

interface HeaderProps {
    tab:number,
    
}

function Header({tab, setTab, setToggleList}) {

    return (
        <TH.MHeader>
            <h1>홍콩 여행 지도</h1>
            <TH.List>
                <ul>
                    <li>
                        <TH.GnbButton $isActive={tab === 0} onClick={() => {setTab(0); setToggleList(0)}}>
                            <img src={IconBed} alt='숙소 아이콘'/>
                            숙소
                        </TH.GnbButton>
                    </li>
                    <li>
                        <TH.GnbButton $isActive={tab === 1} onClick={() => {setTab(1); setToggleList(0)}}>
                            <img src={IconRest} alt='맛집 아이콘'/>
                            맛집
                        </TH.GnbButton>
                    </li>
                    <li>
                        <TH.GnbButton $isActive={tab === 2} onClick={() => {setTab(2); setToggleList(0)}}>
                            <img src={IconCafe} alt='카페 아이콘'/>
                            카페
                        </TH.GnbButton>
                    </li>
                    <li>
                        <TH.GnbButton $isActive={tab === 3} onClick={() => {setTab(3); setToggleList(0)}}>
                            <img src={IconPub} alt='펍 아이콘'/>
                            펍
                        </TH.GnbButton>
                    </li>
                    <li>
                        <TH.GnbButton $isActive={tab === 4} onClick={() => {setTab(4); setToggleList(0)}}>
                            <img src={IconBuilding} alt='관광지 아이콘'/>
                            관광지
                        </TH.GnbButton>
                    </li>
                </ul>
            </TH.List>
        </TH.MHeader>
    );
}

export default Header;
