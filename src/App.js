import React from 'react';
import './styles/App.css';
import {
  Navbar, Banner, Information
} from './components';


function App() {
  return (
    <>
      <div className='main-page'>
        <div className='main-navbar'>
          <Navbar />
        </div>
        <div className='main-banner'>
          <Banner />
        </div>
        <div className='main-information'>
          <Information />
        </div>
      </div>
    </>
  );
}

export default App;
