import React from 'react';
// import { Link } from 'react-router-dom';

function Header({tab, setTab}) {

    return (
        <header>
            <h1>홍콩 여행 지도</h1>
            <nav>
                <ul>
                    <li>
                    <button onClick={() => setTab(0)}>숙소</button>
                    </li>
                    <li>
                        <button onClick={() => setTab(1)}>맛집</button>
                    </li>
                    <li>
                        <button onClick={() => setTab(2)}>카페</button>
                    </li>
                    <li>
                        <button onClick={() => setTab(3)}>펍</button>
                    </li>
                    <li>
                        <button onClick={() => setTab(4)}>관광지</button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
