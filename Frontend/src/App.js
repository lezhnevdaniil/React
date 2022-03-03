import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Data from './home/Data';
import Tasks from './home/Tasks';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <div className='wrap'>
        <h1 className='header'>Hellow world!</h1>
      </div>
      <Tasks/>
    </div>
  );
}

export default App;
