import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import MakeCardGivenInfo from '../components/MakeCardGivenInfo';
import CardInspector from '../components/CardInspector';
import DragMove from '../Components/dragMove';
import CardView from '../components/CardView';

const selectedCards = [];

const num = 0;

export default function draftedCards(props) {
  selectedCards.push(props.currentCard[2])
  //console.log(props.currentCard)
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
      {selectedCards}
      </div>
    </div>
    </div>
  )
}