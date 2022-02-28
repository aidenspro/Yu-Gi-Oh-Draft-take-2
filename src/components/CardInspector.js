import React from 'react';
import React, { useState, useEffect, useRef } from 'react';


export default function cardInspect(props){

  const imageRef = useRef();
  const ref = useRef();
  
  const [position, setPosition] = useState({x: 0, y: 0})
  var [currentName, setCurrentName] = useState("loading...");
  var [currentDesc, setCurrentDesc] = useState("loading...");

  const onHover = (event) => {
   
    setCurrentName(props.card[1])
    setCurrentDesc(props.card[2])

    setPosition({
     x: event.clientX+20,
     y: event.clientY+20
    })
  
}

 //set the card preview to visible

//set the card preview to not visible


//updating position of the style of the card preveiw div
useEffect(() => {
  if (ref.current) {
    ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
  }
}, [position])

  
return(
  <div ref={ref} className=" cardInspectorHidden" >
      <div className="inspectHeader">
                {currentName}
        </div>
        <div className="inspectBody">
                {currentDesc}
        </div>
    </div>
  
)

}