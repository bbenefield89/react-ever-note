import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LandingPage from './landingpage/LandingPage';
import Notes from './notes/Notes';

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
