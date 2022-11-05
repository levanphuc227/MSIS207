import React from 'react';
import ReactDOM from 'react-dom/client';

const smartPeople = [
  { name: 'Johann Goethe', age: 82, IQ: 210 },
  { name: 'Albert Einstein', age: 76, IQ: 205 },
  { name: 'Leonardo', age: 67, IQ: 108 },
  { name: 'Isaac Newton', age: 84, IQ: 190 },
  { name: 'James Maxwell', age: 48, IQ: 190 },
  { name: 'Rodolf Clausius', age: 66, IQ: 190 },
  { name: 'Nicolaus Copernicus', age: 70, IQ: 160 },
  { name: 'Gottfried Leibniz', age: 70, IQ: 182 },
  { name: 'William Sdis', age: 46, IQ: 200 },
]

const element = (
  <ul>
    {
      smartPeople.map((i) => {
        return (
          <li key={i}>
            <p>{i["name"]}'s age is {i["age"]} and have {i["IQ"]} IQ</p>
          </li>
        )
      })
    }
  </ul>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

