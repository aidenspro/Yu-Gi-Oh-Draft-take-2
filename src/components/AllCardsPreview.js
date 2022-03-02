import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

var images = [];
export default function AllCardsPreview(props) {

  
    images.push( <img className={".placeholder-plain-preview"} 
    src={
      'https://storage.googleapis.com/ygoprodeck.com/pics/' +
      props.cards[0] +
      '.jpg'
    }
    width={'100%'}
    height={'100%'}
    draggable="false"
    position="relative"
    alt={props.cards[1]}
  />)
    

  return(images)

}