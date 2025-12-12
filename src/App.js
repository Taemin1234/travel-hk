import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Header from './components/Header'
import TravelInfo from './components/TravelInfo'

const GlobalStyle = createGlobalStyle`
   ${reset}

  button {
    background-color: transparent;
    border: none;
    color: #fff;
  }

  body {
    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.02), rgba(255,255,255,0)), #0f0f14;
    color: #f5f6fa;
    font-family: 'Inter', 'Noto Sans KR', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    padding-bottom: 40px;
  }
`;


function App() {
  let [tab, setTab] = useState(0)
  const [toggleList, setToggleList] = useState(0)
  let ctg = ['hotels', 'restaurant', 'cafe', 'pub', 'sites'][tab];

  return (
    <>
      <GlobalStyle/>
      <Header tab={tab} setTab={setTab} setToggleList={setToggleList}/>
      {/* <TabContent tab={tab}/> */}
      <TravelInfo category={ctg} toggleList={toggleList} setToggleList={setToggleList}/>
    </>

  );
}

export default App;
