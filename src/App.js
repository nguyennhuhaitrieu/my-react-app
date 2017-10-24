import React, { Component } from 'react';
import Course from './components/Course';

class App extends Component {
  render() {
    return (
      <div className="row">
        <Course name="ReactJs" time="40h" free={true}></Course>
        <Course name="Angular 4x" time="50h" free={false}></Course>
        <Course name="TypeScript" time="45h" free={true}></Course>
      </div>
    );
  }
}

export default App;
