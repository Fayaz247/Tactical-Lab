import React from 'react';
import './HomePage.css';
import { Button } from '../Button/Button';

const HomePage = () => {
  return (
    <div className="home-container"> 
      <video src='./media/droneShot.mp4' autoPlay loop muted></video>
      <div className="hero-btns"> 
      <div className="btn-container">
        
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' linkTo='/learn'>Learn More</Button>
        
      </div>
      <div className="btn-container">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' linkTo='/login'>Sign In</Button>
      </div>
      </div>
    </div>
  );
}

export default HomePage;
