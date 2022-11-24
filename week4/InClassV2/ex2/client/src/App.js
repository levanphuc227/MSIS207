import './App.css';
import Header from './components/Header/index.js'
import DatingCards from './components/DatingCards'
import SwipeButton from './components/SwipeButton/index.js'
function App() {
  return (
    <div className="App">
      <div className='app'>
        <Header/>
        <DatingCards/>
        <SwipeButton/>
      </div>
    </div>
  );
}

export default App;
