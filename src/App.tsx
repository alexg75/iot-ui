import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DeviceRow, DeviceRows  } from './device';

function App() {
  return (
    <div className="App">
      <div className='header'>CB25 9DX - IOT</div>
      <div><DeviceRows /></div>               
      <div className='footer'>Yes, pressing a button is far better than walking to the lamp!</div>
    </div>
  );
}

export default App;
