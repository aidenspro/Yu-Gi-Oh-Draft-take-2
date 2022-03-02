import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';

import RandomCards from '../components/RandomCards';
var num = 0;
var cardArray = [];
function draftDisplay() {
  
  var [nextCard,setNextCard] = useState(0);
  var [selectedCard,setSelectedCard] = useState("currentCard");
  var testArray = [55144522,"Click Here","To Start Draft","test"];
  var ref = useRef();

  const handleOnClick = (infoArray) => {
    //console.log(cardArray.length)
    //console.log(infoArray)
    ref.current.className = "test-hidden"
    if(infoArray.type != "click"){
    setSelectedCard(infoArray);
    cardArray[num] = infoArray[0]
    console.log(cardArray)
    num++;
    setNextCard(num);
    }
  };

  const createDeckList = () => {
    var deckString = "#main"

    //for(var i = 1; i < num; i++)


  }

  return (
    <div className="container" >
      <button >
        Copy Deck to clipboard
      </button>
     
      <div className="randomcards" id={"border"} > 
      <div className="test" ref={ref} onClick={() => handleOnClick(testArray)}> <h1> Click Here to Start Draft </h1> </div>
      <MakeCardGivenInfo key={0} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={1} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={2} nextCard={nextCard}handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={3} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={4} nextCard={nextCard} handleOnClick={handleOnClick}/>
      </div>
     
      <div className="draftheaders"> 
      <h3 className="draftheaderscolumn">
       {"Monsters"}
      </h3>
      <h3 className="draftheaderscolumn">
       {"Spells"}
      </h3>
      <h3 className="draftheaderscolumn">
       {"Traps"}
      </h3>
      <h3 className="draftheaderscolumn">
       {"Extra Deck"}
      </h3>
      <h3 className="draftheaderscolumn">
       {"All Cards"}
      </h3>
      </div>
   <DraftedCardsDisplay currentCard={selectedCard}/>
    
    

  </div>
    
  );
}

export default draftDisplay;