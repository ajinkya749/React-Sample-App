import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import GridLayOut from './GridLayOut';
import CaraouselComponent from './Carousel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <CaraouselComponent />
        <GridLayOut />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
