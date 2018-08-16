import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';
import Badges from './Badges.jsx';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';
import Step3 from './Step3.jsx';
import { Tabs, Tab } from 'react-bootstrap/lib';

class App extends Component {
  render() {

      return (

        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Monero Badge Solution</h1>
        </header>
        <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Badges">
              <Badges/>
            </Tab>
            <Tab eventKey={2} title="Decode / Encoder">
                <Step2/>
            </Tab>
            <Tab eventKey={3} title="Solution">
                <Step3/>
            </Tab>
            <Tab eventKey={4} title="Solution Play">
                <Step1/>
            </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
