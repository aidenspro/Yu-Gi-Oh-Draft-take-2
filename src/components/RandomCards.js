import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';

var cardArray = [];
var card = 0;


export default function randomCards(props){
  var ref = useRef();
  const [position, setPosition] = useState({x: 0, y: 0})
  var [currentName, setCurrentName] = useState("loading...");
  var [currentDesc, setCurrentDesc] = useState("loading...");

  cardArray = props.cardArray;

 
  var cardImages = (
    <div className={"grid"}ref={ref} id={cardArray[0][1]} onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit} onClick={handleOnClick}>
      {cardArray[0][0]}
    </div>
  );

  return(
    <div>
    {cardImage}
    <div className="inspectHeader">
                {currentName}
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
    </div>
  )
}
