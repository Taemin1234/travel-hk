import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Header from './components/Header'
import TabContent from './components/TabContent'

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
  let [tab, setTab] = useState(0)

  return (
    <>
      <GlobalStyle/>
      <Header tab={tab} setTab={setTab}/>
      <TabContent tab={tab}/>
    </>

  );
}

export default App;
