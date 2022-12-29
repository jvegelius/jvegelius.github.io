import React from 'react';
import './App.css';
import { Card } from './Components/Card/Card';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <div className='grid justify-items-stretch grid-cols-1 laptop:grid-cols-6 pb-10'>
        <div></div>
        <div>
          <Card />
        </div>
        <div className='laptop:col-span-3'>
          <Body />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
