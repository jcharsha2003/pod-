import React from 'react';

import App1 from './App1';
import { persistor, store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

const index1 = () => {
  return (
    <div>
        <Provider store= {store}>
      <PersistGate loading={null} persistor={persistor}>
      <App1 />
    </PersistGate>
    </Provider>
    </div>
  )
}

export default index1