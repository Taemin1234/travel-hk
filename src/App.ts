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
    background-color: #555;
    color: #fff;
  }
`;


function App() {
  let [tab, setTab] = useState<number>(0)
  const [toggleList, setToggleList] = useState<number>(0)
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
