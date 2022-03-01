import React, { useState, useEffect } from 'react';
import MakeCardGivenInfo from "../components/MakeCardGivenInfo"

function getJson() {
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


function returnInfo(cardJSON){
  var cardInfo = [];
  
  cardInfo[0]=cardJSON.id;
  cardInfo[1]=cardJSON.name;
  cardInfo[2]=cardJSON.desc;
  cardInfo[3]=cardJSON.type;
  cardInfo[4]=cardJSON.race;
  cardInfo[5]=cardJSON.archetype;
  cardInfo[6]=cardJSON.atk;
  cardInfo[7]=cardJSON.def;
  cardInfo[9]=cardJSON.level;
  cardInfo[10]=cardJSON.attribute

  return cardInfo;
}

export default function cardInfo() {
return (returnInfo(getJson()));
}
