import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import CardInspector from '../components/CardInspector';


export default function makeCard(props) {//---------------------- export function
  var [count,setCurrentCount] = useState(0);
  
  var cardNumber = props.id;
  var futureCards = [];
  futureCards[0] = [48214588,"Rookie fur Hire","test","test"]
  for(var i = 1;i<6;i++){
    futureCards[i] = GetRandomCardInfo();
  }

  
  const imageRef = useRef();
  const ref = useRef();
  
  const [position, setPosition] = useState({x: 0, y: 0})
  var [currentName, setCurrentName] = useState("loading...");
  var [currentDesc, setCurrentDesc] = useState("loading...");
  const onHover = (event) => {
   
    setCurrentName(futureCards[props.nextCard][1])
    setCurrentDesc(futureCards[props.nextCard][2])

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
  event.currentTarget.className = "placeholder-plain-nofade"
  ref.current.className=("cardInspectorHidden");
}

//updating position of the style of the card preveiw div
useEffect(() => {
  if (ref.current) {
    ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
  }
}, [position])

const handleOnClick = (caller) => {
  console.log(props.nextCard)
  
  props.handleOnClick(futureCards[props.nextCard]);
  imageRef.current.className="placeholder-plain"
  setCurrentCount(count + 1);
}



//-----------------------------------return
  return (
  <div>
  <img ref={imageRef} className={"placeholder-plain"} id={cardNumber} onMouseMove={onHover}  onMouseEnter={hoverEnter} onMouseOut={hoverExit} onClick={() => handleOnClick()}
  src={
    'https://storage.googleapis.com/ygoprodeck.com/pics/' +
    futureCards[props.nextCard][0] +
    '.jpg'
  }
  draggable="false"
  position="relative"
  alt={futureCards[props.nextCard][1]}
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

