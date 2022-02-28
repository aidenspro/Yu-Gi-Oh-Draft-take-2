import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';

import RandomCards from '../components/RandomCards';

function draftDisplay() {
  var cardArray = [];

  var [selectedCard,setSelectedCard] = useState("currentCard");
  var testArray = [48214588,"Rookie fur Hire"];

  const handleOnClick = (imageRef,infoArray) => {
    //console.log(cardArray.length)
    console.log(infoArray)
    
    if(infoArray.type != "click")
    setSelectedCard(infoArray);

  };



  return (
    <div>
      <div className="randomcards" id={"border"} > <MakeCardGivenInfo id={0} handleOnClick={handleOnClick}/>
      </div>
   <DraftedCardsDisplay currentCard={selectedCard}/>
    </div>
      
    
  );
}

export default draftDisplay;