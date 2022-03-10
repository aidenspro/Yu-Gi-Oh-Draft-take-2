import React from 'react';
import MakeCardGivenInfo from './components/MakeCardGivenInfo';
import GetRandomCardInfo from './components/GetRandomCardInfo';
import CardInspector from './components/CardInspector';
import DraftDisplay from './components/DraftDisplay';
import CardLibrary from './components/CardLibrary';
import './style.css';

function Notes() {
  const [text, setText] = React.useState();
  fetch(CardLibrary)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });
  return text || 'Loading...';
}

export default function App() {
  var infoArray = [48214588, 'Rookie fur Hire'];

  return <DraftDisplay />;
}
