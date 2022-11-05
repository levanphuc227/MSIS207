import React from 'react';
import ReactDOM from 'react-dom/client';

import MySection from './MySection'
import MyButton from './MyButton'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MySection>
    <MyButton>My Button text</MyButton>
  </MySection>
);
