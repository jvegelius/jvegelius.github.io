import React from 'react';
import './App.css';
import { Card } from './Components/Card/Card';
import Body from './Components/Body/Body';

function App() {
  return (
    <div className='grid justify-items-stretch grid-cols-1 laptop:grid-cols-6'>
      <div></div>
      <div>
        <Card />
      </div>
      <div className='laptop:col-span-3'>
        <Body />
      </div>
    </div>
  );
}

export default App;
