
import React from 'react';
import React, { useState, useEffect, useRef, createRef } from 'react';

export default function SaveList (props)  {

  const data = new Blob([props.deckList.join('\n')], { type: 'text/plain' })
  const downloadLink = window.URL.createObjectURL(data)

  return (
    <>
      <a className={'fakebutton'} download='list.ydk' href={downloadLink}> Download</a>
    </>
  );
}