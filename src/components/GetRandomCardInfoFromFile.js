import React, { useState, useEffect } from 'react';
import MakeCardGivenInfo from "../components/MakeCardGivenInfo"
import CardArray from '../components/CardArray';

const cardArray = CardArray();

function getRandomInt() {
  //console.log(cardArray[getRandomInt()])
  return Math.floor(Math.random() * cardArray.length);
}

function getJson() {
  const [card, setCard] = useState([]);
  

  useEffect(() => {
    fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?id=' + cardArray[getRandomInt()])
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        
        setCard(data.data[0]);
      })
      .then(() => {
        return card;
      });
  }, []);

  return card;
}

//assigns array based on jSon info
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
  

  if(cardInfo[6] >= 0 ) {
  cardInfo[11]= "ATK/DEF : " + cardInfo[6] + "/" + cardInfo[7];
  }else{
    cardInfo[11]=" "
  }
  

  


  return cardInfo;
}

export default function cardInfo() {
return (returnInfo(getJson()));
}
