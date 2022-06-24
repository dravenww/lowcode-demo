import React, { useEffect } from 'react';
import { init } from '@alilc/lowcode-engine';
import { initPlugin } from "./plugins/init";

import './App.css';

const lowCodeId = 'lowCode-container';
const initApp = async () => {
  await initPlugin();
  await init(document.getElementById(lowCodeId)!, {
    enableCondition: true,
    enableCanvasLock: true,
    supportVariableGlobally: true,
    device: 'default',
    locale: 'zh_CN',
    renderEnv: 'react',
    requestHandlersMap: {
      // fetch: {}, // todo fetch
    },
  });
}

function App() {
  useEffect(() => {
    initApp().then(() => {
      console.log('init');
    });
  });
  return (
    <div id={lowCodeId}>
    </div>
  );
}

export default App;
