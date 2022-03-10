import React from 'react';
import MakeCardGivenInfo from './components/MakeCardGivenInfo';
import GetRandomCardInfo from './components/GetRandomCardInfo';
import CardInspector from './components/CardInspector';
import DraftDisplay from './components/DraftDisplay';
import { CardLibrary } from './components/CardLibrary';
import './style.css';

export default function App() {
  var infoArray = [48214588, 'Rookie fur Hire'];
  console.log(CardLibrary);

  return <DraftDisplay />;
}
