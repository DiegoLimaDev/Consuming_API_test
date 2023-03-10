import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { GlobalContext } from './utils/GlobalContext';
import { Footer } from './components/Footer/Footer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalContext>
      <Header />
      <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </GlobalContext>
  </React.StrictMode>,
);
