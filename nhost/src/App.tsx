import React from 'react';
import logo from './logo.svg';
import './App.css';
import NhostStatus from './components/NhostStatus';
import { useEffect } from 'react';
import nhost from "./lib/nhost"
import { useSubscription } from '@apollo/client';
import { GET_TASK } from './graphql/subscriptions';

function App() {

  const { data: subscriptionData } = useSubscription(GET_TASK);
  
  useEffect( () => {

    if (subscriptionData) {
      console.log(subscriptionData.usuarios[0].usu_nome);
    } 

  }, [subscriptionData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <NhostStatus />

    </div>
  );
}

export default App;
