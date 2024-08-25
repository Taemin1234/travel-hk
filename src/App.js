import React, { useState } from 'react';

import Header from './components/Header'
import TabContent from './components/TabContent'


function App() {
  let [tab, setTab] = useState(0)

  return (
    <>
      <Header tab={tab} setTab={setTab}/>
      <TabContent tab={tab}/>
    </>

  );
}

export default App;
