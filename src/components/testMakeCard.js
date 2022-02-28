import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';


function getJson() {//-----------------------------------getJSOn
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //return obj = data;
        //console.log(data);
        setCard(data); // setting obj using setObj
      })
      .then(() => {
        return card;
      });
  }, []);

  return card;
}


function returnInfo(cardJSON){//-----------------------------setUp info array
  var cardInfo = [];
  
  cardInfo[0]=cardJSON.id;
  cardInfo[1]=cardJSON.name;
  cardInfo[2]=cardJSON.desc;
  cardInfo[3]=cardJSON.type;
  cardInfo[4]=cardJSON.race;
  cardInfo[5]=cardJSON.archetype;

  return cardInfo;
}

export default function cardInfo() {
return (returnInfo(getJson()));
}

var infoArray;
export default function makeCard(props) {//---------------------- export function
  var image;
  var cardNumber = props.id;
  infoArray = returnInfo(getJson());
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
  imageRef.current.innerHTML = ""
  //infoArray = returnInfo(getJson());
  props.handleOnClick(imageRef,infoArray);

  image = <img
  className={className}
  id={cardNumber}
  src={
    'https://storage.googleapis.com/ygoprodeck.com/pics/' +
    infoArray[0] +
    '.jpg'
  }
  draggable="false"
  position="relative"
  alt={infoArray[1]}
/>
}


  image = <img
  className={className}
  id={cardNumber}
  src={
    'https://storage.googleapis.com/ygoprodeck.com/pics/' +
    infoArray[0] +
    '.jpg'
  }
  draggable="false"
  position="relative"
  alt={infoArray[1]}
/>

var imageArray = [image,id,name,desc,type,race,archetype]
//-----------------------------------return
  return (
    <div ref={imageRef} className={"grid"} id={cardNumber} onMouseMove={onHover} onMouseEnter={hoverEnter} onMouseOut={hoverExit} onClick={() => handleOnClick(imageRef,infoArray)}>
    {image}
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
