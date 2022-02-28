import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';

import RandomCards from '../components/RandomCards';
var num = 0;
function draftDisplay() {
  var cardArray = [];
  var [nextCard,setNextCard] = useState(0);
  var [selectedCard,setSelectedCard] = useState("currentCard");
  var testArray = [48214588,"Rookie fur Hire"];

  const handleOnClick = (infoArray) => {
    //console.log(cardArray.length)
    //console.log(infoArray)
    
    if(infoArray.type != "click"){
    setSelectedCard(infoArray);
    num++;
    setNextCard(num);
    }
  };



  return (
    <div>
      <div className="randomcards" id={"border"} > 
      <MakeCardGivenInfo key={0} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={1} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={2} nextCard={nextCard}handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={3} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={4} nextCard={nextCard} handleOnClick={handleOnClick}/>
      </div>
   <DraftedCardsDisplay currentCard={selectedCard}/>
    </div>
      
    
  );
}

export default draftDisplay;