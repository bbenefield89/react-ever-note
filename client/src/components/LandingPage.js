import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {  
  return (
    <div>
      <nav className='landing-page-nav'>
        <span className='take-notes-logo'>Take Notes!</span>
        <ul className='landing-page-nav-links' style={{ display: 'inline' }}>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </nav>
      
      <main>
        <h1>Welcome to Take Notes! The easiest way to never forget!</h1>
        
        <div className='p-div'>
          <p>
            Organize your life. Important work event next month? Birthday party? Never 
            forget another important date with the help of notifications sent to you a week 
             or the day before your next event.
          </p>
        </div>
        <Link to='/notes' className='link'>
          <button type='button'>Start taking notes</button>
        </Link>
      </main>
      
    </div>
  );
};

export default LandingPage;
