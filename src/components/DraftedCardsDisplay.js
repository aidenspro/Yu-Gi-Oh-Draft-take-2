import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';


const selectedCards = [];
const monsters = [];
const spells = [];
const traps = [];
const extra = [];
const extraNoPic = [];
const allCards = [];
const allCardsNoPic = [];
var lastCard = [];
const num = 0;


export default function draftedCards(props) {
  allCardsNoPic.push(props.currentCard)

  const hoverEnter = (event) => {
    
    ref.current.className=("cardInspector");
  }
  //set the card preview to not visible
  const hoverExit = (event) => {
    
    ref.current.className=("cardInspectorHidden");
  }

  //when hovering a card, set the info of the card preview to that cards info
  const onHover = (event) => {
  

    setAttack(props.currentCard[11])
    setCurrentRace(props.currentCard[4] + "/" + props.currentCard[3].split(" ")[0])
    setCurrentName(props.currentCard[1])
    setCurrentDesc(props.currentCard[2])
    setCurrentType(props.currentCard[3])
    setCurrentAttribute(props.currentCard[10])
    if(event.clientX - (window.innerWidth * .10) < 0){
      setPosition({
        x: event.clientX - event.clientX,
        y: event.clientY+20
       })
      }else if((event.clientX + (window.innerWidth * .10)) > window.innerWidth * .8){
      console.log('here')
      setPosition({
      x: window.innerWidth * .8 - (window.innerWidth * .20),
      y: event.clientY+20
      })
    }
    else{
       setPosition({
        x: event.clientX - window.innerWidth * .1,
        y: event.clientY+20
       })
      }
  
}

// organizes the data that is shown in the card preview below the cardDisplay
  const previewSetup = (preview) =>{
    //console.log(preview[4].split(" "));
    
  
    switch(preview[3].split(" ").pop()){
      case  "Monster":
        if(preview[3].split(" ")[0] == 'Effect' ||
        preview[3].split(" ")[0] == 'Normal' ||  preview[3].split(" ")[0] == 'Flip' ||  preview[3].split(" ")[0] == 'Tuner' ){
  
          monsters.push(
            <div className="monster-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
            {preview[1]}
            </div>
          )
          
        }else{
        extra.push(
          <div className="extra-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
          {preview[1]}
          </div>)
        extraNoPic.push(preview);
      }
        
        case "Card":
          if(preview[3].split(" ")[0] == 'Spell')
            spells.push(
              <div className="spell-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
              {preview[1]}
              </div>
            )
          else if(preview[3].split(" ")[0] == 'Trap' )
          traps.push(
            <div className="trap-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit} >
            {preview[1]}
            </div> 
          )
          
      }
    
    return(
      <div className="preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
        {preview[1]}
      </div>
  
    )
  }
  //checks for multiple clicks of the same card
  if(lastCard != props.currentCard)
    selectedCards.push(previewSetup((props.currentCard)))
    lastCard = props.currentCard


    const ref = useRef();
    const type = props.currentCard[3].split(" ").pop();
    const [position, setPosition] = useState({x: 0, y: 0})
    var [currentName, setCurrentName] = useState("loading...");
    var [currentDesc, setCurrentDesc] = useState("loading...");
    var [currentRace, setCurrentRace] = useState("loading...");
    var [currentAttribute, setCurrentAttribute] = useState("loading...");
    var [currentType, setCurrentType] = useState("loading...");
    var [attack, setAttack] = useState("0");

  
  //updating position of the style of the card preveiw div
  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])


  
  
  return (
     
    <div className="draftedcards" >
      <div className="draftedcardscolumn" >
      {monsters}
      </div>
      <div className="draftedcardscolumn" >
      {spells}
      </div>
      <div className="draftedcardscolumn" >
      {traps}
      </div>
      <div className="draftedcardscolumn" >
      {extra}
      </div>
      <div className="draftedcardscolumn" >
      {allCards}
      </div>
      <div className="draftedcardscolumn" >
      <div ref={ref} className=" cardInspectorHidden" >
      <div className="inspectHeader">
                
            {currentName}{'\n'}
            <text >
            {attack}
            {'\n'} {currentRace}
            </text>
                      
        </div>
        <div className="inspectBody">
                
                {currentDesc}
        </div>
    </div>
      </div>
    </div>
    
  )
}