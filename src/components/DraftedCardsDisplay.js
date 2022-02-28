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

function previewSetup(preview){
  //console.log(preview[4].split(" "));

  switch(preview[3].split(" ").pop()){
    case  "Monster":
      if(preview[3].split(" ")[0] == 'Effect' ||
      preview[3].split(" ")[0] == 'Normal' ){

        monsters.push(
          <div className="monster-preview">
          {preview[1]}
          </div>
        )
      }else
      extra.push(
        <div className="extra-preview">
        {preview[1]}
        </div>
      )
      case "Card":
        if(preview[3].split(" ")[0] == 'Spell'){
          spells.push(
            <div className="spell-preview">
            {preview[1]}
            </div>
          )
        }else if(preview[3].split(" ")[0] == 'Trap')
        traps.push(
          <div className="trap-preview">
          {preview[1]}
          </div>
        )
    }
  
  return(
    <div className="preview">
      {preview[4]}
    </div>

  )
}

export default function draftedCards(props) {
  
    selectedCards.push(previewSetup((props.currentCard)))
    lastCard = props.currentCard
  
  return (
    <div>
    <div className="draftedcardsheader"> 
      <div className="draftedcardsheadercolumn">
       {"Monsters"}
      </div>
      <div className="draftedcardsheadercolumn">
       {"Spells"}
      </div>
      <div className="draftedcardsheadercolumn">
       {"Traps"}
      </div>
      <div className="draftedcardsheadercolumn">
       {"Extra Deck"}
      </div>
      <div className="draftedcardsheadercolumn">
       {"Side Deck"}
      </div>
      </div>
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
      
      </div>
    </div>
    </div>
  )
}