import React from 'react';

export default function makeCard(props) {
  const infoArray = props;

  var id = infoArray[0];
  var name = infoArray[1];
  var desc = infoArray[2];
  var type = infoArray[3];
  var race = infoArray[4];
  var archetype = infoArray[5];

  var image = <img
  className="placeholder-plain"
  id={infoArray[0]}
  src={
    'https://storage.googleapis.com/ygoprodeck.com/pics/' +
    infoArray[0] +
    '.jpg'
  }
  draggable="false"
  position="relative"
  alt={infoArray[1]}
  id={infoArray[0]}
/>

  var finCard = [image
  ,id,name,desc,type,race,archetype];

  return finCard;
}
