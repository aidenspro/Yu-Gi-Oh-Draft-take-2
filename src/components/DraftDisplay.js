import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';
import CreateDeckList from '../components/CreateDeckList'
import RandomCards from '../components/RandomCards';
import AllCardsPreview from '../components/AllCardsPreview';

var num = 0;
var numClicks = 0;
var cardArray = [];
var extraArray = [];
extraArray[0] = '#extra'
var sideDeck = [];
cardArray[0] = "#Created By ...\n#main"
var draftOver = false;
function draftDisplay() {
  
  var [nextCard,setNextCard] = useState(0);
  var [selectedCard,setSelectedCard] = useState("currentCard");
  var testArray = ["55144522","Click Here","To Start Draft","test"];
  var ref = useRef();
  var downloadRef = useRef();
  var randomRef = useRef();

  const handleOnClick = (infoArray) => {
    if(!draftOver){

      if(infoArray[3].split(" ")[0] != 'Effect' ||
        infoArray[3].split(" ")[0] != 'Normal' ||  infoArray[3].split(" ")[0] != 'Flip' ||  infoArray[3].split(" ")[0] !='Tuner' ){
          extraArray.push(infoArray[0]);   
      }
    
    if(infoArray.type != "click" && infoArray[0] != 55144522){
    setSelectedCard(infoArray);
    if(num >= 1){
    cardArray[num] = infoArray[0]}
    }
    
    num++;
    if(num == 33){
      draftOver = true;
      ref.current.className = "test"
      extraArray.push("!side");
      downloadRef.current.style = "visibility: visible"
    }
    
    setNextCard(num);
  }
  };

  const handleOnClickBanner = () => {
    if(numClicks == 0){
    numClicks++
    randomRef.current.className = "randomcards"
    ref.current.className = "test-hidden"
    num++
    setNextCard(num);
    }
  }

  return (

    <div className="container" >
      <div className="test" ref={ref} onClick={() => handleOnClickBanner()}> <h1> Click Here to Start Draft </h1> </div>
      <div className="randomcards-hidden" ref={randomRef} > 
      <MakeCardGivenInfo key={0} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={1} nextCard={nextCard} handleOnClick={handleOnClick}/>
      <MakeCardGivenInfo key={2} nextCard={nextCard}
      handleOnClick={handleOnClick}/>
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
      <h3 className="counter , draftheaderscolumn" > 
      Total{"\n"}
      {num == 1 || num==0 ? "0": num-1} </h3>
      <h3 className="draftheaderscolumn">
       {"Traps"}
      </h3>
      <h3 className="draftheaderscolumn">
       {"Extra Deck"}
      </h3>

      </div>
   <DraftedCardsDisplay currentCard={selectedCard}/>
    <div className={'footer'} ref={downloadRef}>
        Download Deck
        - 
    <CreateDeckList deckList={cardArray.concat(extraArray)}/>
      </div>
      <div className="allCards">
      <AllCardsPreview cards={selectedCard}/>
      </div>

  </div>
    
  );
}

export default draftDisplay;