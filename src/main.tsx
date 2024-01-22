import '@/globals.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import WrappedApp from '@/App';

// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
