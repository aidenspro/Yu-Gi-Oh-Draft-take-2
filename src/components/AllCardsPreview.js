import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

var images = [];
export default function AllCardsPreview(props) {
var tempArray = props.cards[0];
console.log(props.cards[0])
var divRef = useRef();
var imgRef = useRef();

const hoverEnter = (event) => {
imgRef.current.className = "placeholder-plain" + " " + "zoom";
}
//set the card preview to not visible
const hoverExit = (event) => {
  imgRef.current.className = "placeholder-plain"
}

  if(tempArray != 55144522 && tempArray>0)
    images.push( <div id={tempArray} ref={divRef} onMouseEnter={hoverEnter} onMouseOut={hoverExit}> 
    <img 
    ref={imgRef}
    className={"placeholder-plain" } 
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
    position="relative"
    alt={props.cards[1]}
  />
  </div>
  )
    

  return(images)

}