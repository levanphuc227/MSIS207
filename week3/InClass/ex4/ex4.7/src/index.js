import React from 'react';
import ReactDOM from 'react-dom/client';
import UserForm from './components/UserForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
const listInputForm=     [
      {
        name:'product-name',
        type:'text',
        label:"Product name"
      },
      {
        name:'product-price',
        type:'number',
        label:"Product price"
      }
    ]
;
root.render(

  <UserForm listInput={listInputForm}/>
);


