import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

var images = [];
export default function AllCardsPreview(props) {
var tempArray = props.cards[0];
console.log(props.cards[0])
  if(tempArray != 55144522 && tempArray>0)
    images.push( <img className={".placeholder-plain-preview"} 
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
  />)
    

  return(images)

}