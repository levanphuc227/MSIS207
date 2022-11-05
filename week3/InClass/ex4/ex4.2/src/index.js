import React from 'react';
import ReactDOM from 'react-dom/client';
import {Button } from 'antd';
import "antd/dist/antd.min.css" ;

const element =(
  <Button style={{margin:"10px 10px" }} type="primary">Button</Button>
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
