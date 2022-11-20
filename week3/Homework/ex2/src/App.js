import React from 'react';
import 'react-piano/dist/styles.css';

import InteractiveDemo from './InteractiveDemo';
import PlaybackDemo from './PlaybackDemo';
import { lostWoods } from './songs';
import './App.css';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';



class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <InteractiveDemo audioContext={audioContext} soundfontHostname={soundfontHostname} />
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <PlaybackDemo
                audioContext={audioContext}
                soundfontHostname={soundfontHostname}
                song={lostWoods}
              />
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5">
            <div className="col">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
