import React, { useState } from 'react';
import './OneCrust.scss';

const OneCrust = (props) => {
  const [selected, setSelectedState] = useState('border');
  const [legend, setLegend] = useState('');

  function handleSelection() {
    setLegend(legend === '' ? 'flame' : '');

    setSelectedState(selected === 'border' ? 'seleted' : 'border');
  }

  return (
    <div className="crusts-size" onClick={handleSelection}>
      <div
        id={`crust-size-${props.size}`}
        className={`crusts-size-${selected}`}
      >
        <p className={`crusts-size-number ${legend}`}>
          {props.size}
          ″
        </p>
      </div>
      <p className={`crusts-size-title ${legend}`}>{props.title}</p>
    </div>
  );
};

export default OneCrust;
