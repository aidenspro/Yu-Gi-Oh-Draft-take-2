import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';
import RandomCards from '../components/RandomCards';

function draftDisplay() {
  var cardArray = [];
  var [card,setCardArray] = useState();
  var [selectedCard,setSelectedCard] = useState("currentCard");
  var testArray = [48214588,"Rookie fur Hire"];
  const handleOnClick = (infoArray) => {
    
    //setSelectedCard(cardArray[event.target.id])
    //console.log(infoArray)
    if(infoArray.type != "click")
    setSelectedCard(infoArray);
   
  };

  //display the 5 cards that show in the draft view.
    for (let i = 0; i < 5; i++) {
      cardArray[i] = 
        <MakeCardGivenInfo id={i} handleOnClick={handleOnClick}/>
  }


  return (
    <div>
      <div className="randomcards" id={"border"} > {cardArray} 
      </div>
    <DraftedCardsDisplay currentCard={selectedCard}/>
    </div>
      
    
  );
}

export default draftDisplay;