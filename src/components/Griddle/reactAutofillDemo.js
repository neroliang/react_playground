import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import autofill from 'react-autofill';
 
class Form extends Component {
 
    constructor() {
        super();
        this.state = {};
    }
 
    handleChange(e) {
 
        console.log("event-->"+e);
        const { name, value } = e.currentTarget;
        const nextState = {};
 
        nextState[name] = value;
 
        this.setState(nextState);
        console.log("name"+name);
 
    }
 
    render() {
 
        return (
            <form>
                <input
                    onChange={this.handleChange.bind(this)}
                    name="field"
                    value={this.state.field}/>
            </form>
        );
 
    }
 
}
 
// ReactDOM.render(, document.body);

export default class AutoFillForm extends Component {

  render() {
    return React.createElement(autofill(Form));
  }

};