import * as React from 'react';

function App() {
  const [name] = React.useState("Adam")
  const [age] = React.useState(35)
  return (
    <>

      <p>My name is {name}</p>
      <p>My age is {age}</p>

    </>
  );
}

export default App;
