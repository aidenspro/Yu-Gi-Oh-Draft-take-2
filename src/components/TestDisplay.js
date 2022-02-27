import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import DraftedCardsDisplay from '../components/DraftedCardsDisplay';
import RandomCards from '../components/RandomCards';

function draftDisplay() {
  var imageArray = [];
  var cardArray = [];
  var draftRefs = [];
  var [currentName, setCurrentName] = useState("loading...");
  var [currentDesc, setCurrentDesc] = useState("loading...");
  var [selectedCard,setSelectedCard] = useState("currentCard");
  var lastID = 0;
  var currentID = 1;

  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef()
  const [hover, setHover] = useState(false);

  for(var i=0;i<5;i++)
  draftRefs[i] = useRef([]);

  //creating references to each DIV in the draft view
  //for (var i = 0; i < 5; i++) draftRefs[i] = useRef();
  //grabs card info from the draft view

  //when one card is clicked highlight it
  //if a card is already highlighted, swap with next clicked card
  const handleOnClick = (event) => {
    
    var refNum = event.currentTarget.id;
    currentID = cardArray[refNum][1];
    setSelectedCard(cardArray[refNum]);
    //console.log(draftRefs[refNum].current)
    if(draftRefs[refNum].current.className == 'active'){

    }else{
    for (var i = 0; i < draftRefs.length; i++) {//set current card to highlight css and all other to normal css
      refNum == i
        ? (draftRefs[i].current.className = 'active')
        : (draftRefs[i].current.className = 'grid');
    }
  }

  };

  //get location of mouse pointer when hovering a card
  const onHover = (event) => {
   
      setCurrentName(cardArray[event.currentTarget.id][2])
      setCurrentDesc(cardArray[event.currentTarget.id][3])
  
      setPosition({
       x: event.clientX+10,
       y: event.clientY+10
      })
    
  }

  //set the card preview to visible
  const hoverEnter = () => {
    ref.current.className=("cardInspector");
  }
  //set the card preview to not visible
  const hoverExit = () => {
    ref.current.className=("cardInspectorHidden");
  }

  //updating position of the style of the card preveiw div
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  //display the 5 cards that show in the draft view.
  const cardDisplay = () => {

    //creates the array of images 
    for (let i = 0; i < 5; i++) {
      cardArray[i] = MakeCardGivenInfo(GetRandomCardInfo());
      
      imageArray[i] = (
        <div className={"grid"}ref={draftRefs[i]} id={i} onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit} onClick={handleOnClick}>
          {cardArray[i][0]}
        </div>
      );
        
    }
    
  }
    //console.log(imageArray)

    cardDisplay()
  return (
    <div>
      <RandomCards cardArray={cardArray}/>
      <div className="randomcards" id={"border"} > {imageArray} 
      <div ref={ref} className=" cardInspectorHidden" >
        <div className="inspectHeader">
                {currentName}
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
      </div>
    </div>
    <DraftedCardsDisplay currentCard={selectedCard}/>
    </div>
      
    
  );
}

export default draftDisplay;