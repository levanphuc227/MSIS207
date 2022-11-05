import React from 'react';
import ReactDOM from 'react-dom/client';

const user ={
  firstName:'Elon',
  lastName:'Musk',
  age:49
}

const element=(
  <div>
      <h1>firstname :{user["firstName"]} </h1>
      <h1>Lastname :{user["lastName"]} </h1>
      <h1>Age :{user["age"]} </h1>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);
