import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

var images = [];
export default function AllCardsPreview(props) {
var tempArray = props.cards[0];
console.log(props.cards[0])
var divRef = useRef();
var imgRef = useRef();

//keeps track of all chosen cards, returns consistent list
  if(tempArray != 55144522 && tempArray>0)
    images.push( 
    
    <img 
    ref={imgRef}
    className={"placeholder-plain-smaller" + " " + 'zoom'} 
    src={
      'https://storage.googleapis.com/ygoprodeck.com/pics/' +
      props.cards[0] +
      '.jpg'
    }
    width={'100%'}
    height={'100%'}
    max-height={'100%'}
    min-height={'100%'}
    draggable="false"
  
    alt={props.cards[1]}
  />

  )
    

  return(images)

}