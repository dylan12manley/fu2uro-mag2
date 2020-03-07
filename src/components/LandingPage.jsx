import React from 'react';
import start from '../../images/start.png';
import './../../styles/landingPage.css'

function LandingPage(){
  return (
  <div id='landingPage'>
    <div className='startImgs'>
      <a href='/'><img className='startImg' src={start}/></a>
      <a href='#/home'><img className='startImgBtn' src={start}/></a>
      <a href='/'><img className='startImg' src={start}/></a>
    </div>
  </div>
  );
}


export default LandingPage;
