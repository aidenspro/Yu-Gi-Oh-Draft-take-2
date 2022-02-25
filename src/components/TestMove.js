import React from 'react';
import React, { useState, useEffect, useRef } from 'react';
import HoverFollow from '../components/HoverFollow';



export default function testMove() {
  const [position, setPosition] = useState({x: 0, y: 0})
  const ref = useRef()
  const [hover, setHover] = useState(false)

  const onHover = (event) => {
  
      setPosition({
        x: event.movementX,
        y: event.movementY
      })
    
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${position.x}px, ${position.y}px)`
    }
  }, [position])

  return (
    
      
        <div
          ref={ref}
          className="cardInspector"
          onMouseMove={onHover}
          
        >
          
        </div>
     
    
  );
}
