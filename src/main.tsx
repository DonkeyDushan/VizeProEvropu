import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'app/App.tsx';
import { ThemeProvider } from 'styled-components';
import palette from 'app/theme/palette';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={palette}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
