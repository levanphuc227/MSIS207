import React from 'react';
import ReactDOM from 'react-dom/client';
import MyButton from './components/MyButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
function render({ second }) {
  root.render(
    <main>
      <MyButton></MyButton>
      <MyButton text={second.text} disabled={second.disabled}></MyButton>
    </main>
  );
};

render({
  second:{
    text:"Second Button",
    disabled:true
  }
})

