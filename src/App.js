import React, { Component } from 'react';
import Course from './components/Course';

class App extends Component {
  render() {
    const items =[
      {
        name: 'ReactJs',
        time: '30h',
        free: false,
        desc: "ReactJs is very"
      },
      {
        name: 'Angular 4x',
        time: '50h',
        free: true,
        desc: "Angular 4x Pro"
      },
      {
        name: 'NodeJs',
        time: '40h',
        free: true,
        desc: "Node Js Api"
      }
    ];

    const eleCourses = items.map((item,index) =>
      <Course key = {index} name={item.name} time={item.time} free={item.free} desc={item.desc}></Course>
    );

    return (
      <div className="row">
        {eleCourses}
      </div>
    );
  }
}

export default App;
