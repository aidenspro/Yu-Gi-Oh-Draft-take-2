import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';


var infoArray;
var count = 0;
export default function makeCard(props) {//---------------------- export function
  var [image, setImage] = useState("loading...");
  
  var cardNumber = props.id;
  var futureCards = [];
  for(var i = 0;i<5;i++){
    futureCards[i] = GetRandomCardInfo();
  }
  infoArray = GetRandomCardInfo();
  var id = infoArray[0];
  var name = infoArray[1];
  var desc = infoArray[2];
  var type = infoArray[3];
  var race = infoArray[4];
  var archetype = infoArray[5];
  const ref = useRef();
  const imageRef = useRef();
  const [position, setPosition] = useState({x: 0, y: 0})
  var [currentName, setCurrentName] = useState("loading...");
  var [currentDesc, setCurrentDesc] = useState("loading...");
  var [className, setClassName] = useState("placeholder-plain");

  const onHover = (event) => {
   
    setCurrentName(infoArray[1])
    setCurrentDesc(infoArray[2])

    setPosition({
     x: event.clientX+20,
     y: event.clientY+20
    })
  
}

 //set the card preview to visible
 const hoverEnter = (event) => {
  event.currentTarget.className = "active"
  ref.current.className=("cardInspector");
}
//set the card preview to not visible
const hoverExit = (event) => {
  event.currentTarget.className = "placeholder-plain"
  ref.current.className=("cardInspectorHidden");
}

//updating position of the style of the card preveiw div
useEffect(() => {
  if (ref.current) {
    ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
  }
}, [position])

const handleOnClick = (imageRef, infoArray) => {
  //imageRef.current.innerHTML = ""

  props.handleOnClick(imageRef,infoArray);
  console.log(infoArray)
  infoArray = futureCards[count]
  console.log(futureCards[count])
  console.log(imageRef.current.src)
  imageRef.current.src = 'https://storage.googleapis.com/ygoprodeck.com/pics/' +
  infoArray[0] + '.jpg';
  console.log(imageRef.current.src)
  count++;
}


  

var imageArray = [image,id,name,desc,type,race,archetype]
//-----------------------------------return
  return (
  <div>
  <img ref={imageRef} className={className} id={cardNumber} onMouseMove={onHover}  onMouseEnter={hoverEnter} onMouseOut={hoverExit} onClick={() => handleOnClick(imageRef,infoArray)}
  src={
    'https://storage.googleapis.com/ygoprodeck.com/pics/' +
    infoArray[0] +
    '.jpg'
  }
  draggable="false"
  position="relative"
  alt={infoArray[1]}
/>
    <div ref={ref} className=" cardInspectorHidden" >
      <div className="inspectHeader">
                {currentName}
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
    </div>
  </div>
  )
}
export {infoArray}
