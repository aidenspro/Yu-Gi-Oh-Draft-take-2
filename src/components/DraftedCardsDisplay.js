import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import CardInspector from '../components/CardInspector';
import DragMove from '../Components/dragMove';
import CardView from '../components/CardView';

const selectedCards = [];
const monsters = [];
const spells = [];
const traps = [];
const extra = [];
var lastCard = [];
const num = 0;


export default function draftedCards(props) {


  const hoverEnter = (event) => {
    
    ref.current.className=("cardInspector");
  }
  //set the card preview to not visible
  const hoverExit = (event) => {
    
    ref.current.className=("cardInspectorHidden");
  }

  const onHover = (event) => {

    setCurrentName(props.currentCard[1])
    setCurrentDesc(props.currentCard[2])

    setPosition({
     x: event.clientX+20,
     y: event.clientY+20
    })
  
}

  const previewSetup = (preview) =>{
    //console.log(preview[4].split(" "));
  
    switch(preview[3].split(" ").pop()){
      case  "Monster":
        if(preview[3].split(" ")[0] == 'Effect' ||
        preview[3].split(" ")[0] == 'Normal' ){
  
          monsters.push(
            <div className="monster-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
            {preview[1]}
            </div>
          )
        }else
        extra.push(
          <div className="extra-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
          {preview[1]}
          </div>
        )
        case "Card":
          if(preview[3].split(" ")[0] == 'Spell'){
            spells.push(
              <div className="spell-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
              {preview[1]}
              </div>
            )
          }else if(preview[3].split(" ")[0] == 'Trap' )
          traps.push(
            <div className="trap-preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit} >
            {preview[1]}
            </div>
          )
      }
    
    return(
      <div className="preview" onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit}>
        {preview[4]}
      </div>
  
    )
  }
  if(lastCard != props.currentCard)
    selectedCards.push(previewSetup((props.currentCard)))
    lastCard = props.currentCard

    const ref = useRef();
    const [position, setPosition] = useState({x: 0, y: 0})
    var [currentName, setCurrentName] = useState("loading...");
    var [currentDesc, setCurrentDesc] = useState("loading...");

    
  
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
      <div ref={ref} className=" cardInspectorHidden" >
      <div className="inspectHeader">
                {currentName}
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
    </div>
      </div>
    </div>
    
  )
}