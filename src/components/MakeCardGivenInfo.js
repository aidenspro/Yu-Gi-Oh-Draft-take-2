import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';
import GetRandomCardInfo from '../components/GetRandomCardInfo';
import CardInspector from '../components/CardInspector';


export default function makeCard(props) {//---------------------- export function
  var [count,setCurrentCount] = useState(0);
  
  var cardNumber = props.id;
  var futureCards = [];
  futureCards[0] = [55144522,"Click Here","To Start Draft","test"]
  for(var i = 1;i<34;i++){
    futureCards[i] = GetRandomCardInfo();
  }
  const imageRef = useRef();
  const ref = useRef();
  
  const [position, setPosition] = useState({x: 0, y: 0})
  var [currentName, setCurrentName] = useState("loading...");
    var [currentDesc, setCurrentDesc] = useState("loading...");
    var [currentRace, setCurrentRace] = useState("loading...");
    var [currentAttribute, setCurrentAttribute] = useState("loading...");
    var [currentType, setCurrentType] = useState("loading...");
    var [attack, setAttack] = useState("0");
  const onHover = (event) => {
   

    setAttack(futureCards[props.nextCard][11])
    
    setCurrentName(futureCards[props.nextCard][1])
    setCurrentDesc(futureCards[props.nextCard][2])
    setCurrentType(futureCards[props.nextCard][3])
    setCurrentRace(futureCards[props.nextCard][4] +"/" + currentType.split(" ")[0])
    setCurrentAttribute(futureCards[props.nextCard][10])
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

const handleOnClick = (caller) => {
  
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
                {currentName}{'\n'}
            <text >
            {attack}
            {'\n'} {currentRace}
            </text>
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
    </div>
  
  </div>
  )
}

