import React, { Component } from 'react';

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
           title: "Lifecycle"
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);

        console.log("constructor");
    }

    componentWillMount(){
        console.log("componentWillMount"); 
    }

    componentDidMount(){
        console.log("componentWillDidMount");
    }

    handleChangeTitle(){
        this.setState({
            title: "LifecycleComponent - handleChangeTitle"
         })
    }
    render() {
        console.log("render");

        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.title}</h3>
                </div>
                <div className="panel-body">
                    <button onClick={this.handleChangeTitle} type="button" className="btn btn-success" >Change title</button>
                </div>
            </div>
        );
    }
}

export default Lifecycle;
