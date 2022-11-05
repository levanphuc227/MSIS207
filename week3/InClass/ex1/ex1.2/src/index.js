import React from 'react';
import ReactDOM from 'react-dom/client';
import MyList from './components/MyList';
import MyButton from './components/MyButton';


const root = ReactDOM.createRoot(document.getElementById('root'));

const appState={
  text:"My Button",
  disabled:true,
  items:["First","Second","Third"]
};
function render(props){
  root.render(
    <main>
      <MyButton text={props.text} disabled={props.disabled}></MyButton>
      <MyList items={props.items}></MyList>
    </main>
  )
}


render(appState);
setTimeout(()=>{
  appState.disabled=false;
  appState.items.push("Fourth");
  render(appState)
},3000);