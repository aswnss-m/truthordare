import React, { useState } from 'react';
import logo from './typo.png';
import './Card.css';

function Card({ color, title, invert,rotate, zIndex}) {
  const [isFront,setIsFront] = useState(true)
  return (
    <div className={`cardContainer ${!isFront ? 'cardFlipped' : 'cardFlippedReverse'}`} onClick={()=>{
      setIsFront(!isFront)
    }} style={{"--rotate-value":rotate, "--z-index":zIndex}}>
      {isFront?(<div className={`playingCard ${invert ? 'invert' : ''}`} style={{ '--card-color': color }}>
        <h3 className={`title ${invert ? 'textBlack' : ''}`}>{title}</h3>
        <img src={logo} alt="logo" className={`cardLogo ${invert ? 'cardLogoWhite' : ''}`} />
      </div>):(
        <div className="playingCardBack">
          <h3 className={`title ${invert ? 'textBlack' : ''}`}>{title}</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae voluptate eos accusantium nam accusamus </p>
        </div>
      )}
    </div>
  );
}

export default Card;
