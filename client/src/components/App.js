import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import Notes from './Notes';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route path='/notes' component={Notes} />
      </div>
    </BrowserRouter>
  );
};

export default App;
