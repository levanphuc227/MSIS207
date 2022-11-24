import * as React from 'react';

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Le Van Phuc" })
    }, 1000);
  })
}

function App() {
  const [id, setId] = React.useState('Loading..');
  const [name, setnName] = React.useState('Loading..');

  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setnName(user.name);
    })
  })
  return (
    <div className="App">
      <>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      </>
    </div>
  );
}

export default App;
