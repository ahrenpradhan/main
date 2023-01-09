import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './index.css';

import RootContextProvider from '@/Context';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <RootContextProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.DEV ? <ReactQueryDevtools initialIsOpen /> : false}
            <App />
          </QueryClientProvider>
        </RootContextProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
