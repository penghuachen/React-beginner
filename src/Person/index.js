import React from 'react';
import './index.scss';

const person = props => {
  const { name, age, children } = props;
  return (
    <div className="person">
      <h1>{ name }</h1>
      <p>Your Age: { age }</p>
      <p>{ children }</p>
    </div>
  );
}

export default person;