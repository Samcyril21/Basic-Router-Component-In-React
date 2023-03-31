import React from 'react';
import {createRoot } from 'react-dom/client';
import {Browserouter} from 'react-router-dom';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Browserouter>
    <App />
  </Browserouter>
);
