import React, { Component } from 'react';
import Lesson from './Lesson';

class Course extends Component {
  showButtonFree() {
    const isFree = this.props.free;
    //console.log(" is Free: ", isFree);

    if(isFree === true) {
      return <div className="panel-footer">
        <button type="button" className="btn btn-warning">Xem</button>
      </div>
    }
  }
  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{ this.props.name }</h3>
          </div>
          <div className="panel-body">
            <p>Time: { this.props.time }</p>
            <ul className="list-group">
             <Lesson name="Item1"></Lesson>
             <Lesson name="Item2"></Lesson>
             <Lesson name="Item3"></Lesson>
            </ul>
          </div>
          { this. showButtonFree() }
        </div>
      </div>
    );
  }
}

export default Course;