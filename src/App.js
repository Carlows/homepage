import React, { Component } from 'react';
import './App.css';
import Typist from 'react-typist';

class App extends Component {
  constructor(props) {
    super(props);

    this.initializeMatrix = this.initializeMatrix.bind(this);
  }

  componentDidMount() {
    this.initializeMatrix();
    setTimeout(this.initializeName, 2000);
  }

  initializeMatrix() {
    const canvas = this.refs.backgroundCanvas;
    const ctx = canvas.getContext('2d');

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const characters = "伐休伒伓伔伕伖众优伙会伛伜伝伞伟估伱伲伳伴伵伶伷伸伹伺伻似伽伾伿".split("");

    const fontSize = 12;
    const columns = canvas.width / fontSize;
    const drops = [];

    for(let x = 0; x < columns; x++) {
      drops[x] = 100;
    }

    setInterval(() => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#0F0";
      ctx.font = fontSize + "px arial";

      for(let i = 0; i < drops.length; i++)
      {
        const text = characters[Math.floor(Math.random() * characters.length)];

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }, 50);
  }

  render() {
    return (
      <div className="App">
        <canvas ref="backgroundCanvas" />
        <div className="App-Panel">
          <div className="App-Panel-title">
            <div className="App-Panel-title-container">
              <Typist
                startDelay={ 1000 }
                avgTypingDelay={ 100 }
                cursor={{ hideWhenDone: true }}>
                <h1>Carlos Martinez.</h1>
                <br/>
                <h1 className="jobtitle">Venezuelan, Software Developer, Geek!</h1>
              </Typist>
            </div>
            <div className="App-Panel-networks">
              <a target="_blank" className="network" href="https://www.facebook.com/ImNOTCarlosEME">
                <i className="icon-facebook-official"></i>
              </a>
              <a target="_blank" className="network" href="http://stackoverflow.com/users/2958713/carlos-martinez">
                <i className="icon-stackoverflow"></i>
              </a>
              <a target="_blank" className="network" href="https://github.com/Carlows">
                <i className="icon-github"></i>
              </a>
              <a target="_blank" className="network" href="https://twitter.com/ImCarlosEME">
                <i className="icon-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
