import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NhostStatus from './components/NhostStatus';
import { NhostProvider } from '@nhost/react';
import nhost from './lib/nhost';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './lib/apolloClient';
import Cadastro from './components/Cadastro';
import Lista from './components/Lista';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <NhostProvider nhost={nhost}>
      <ApolloProvider client={apolloClient}>
        <NhostStatus />
        <div className='lista'>
          <Lista />
        </div>
        <div className='cadastro'>
          <Cadastro />  
        </div>
      </ApolloProvider>
    </NhostProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
