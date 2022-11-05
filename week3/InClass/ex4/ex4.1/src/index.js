import React from 'react';
import ReactDOM from 'react-dom/client';


const element =(
  <div style={{border:"1px solid green", "font-size":"15px", "text-align":"center", backgroundColor:"#d0f0c0"}}>
    Green is the prime color of the world
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  element
);

