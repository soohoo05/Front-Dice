import React, { Component } from 'react';
import './App.css';
import Home from "./Routes/Home";
import Statistics from "./Routes/Statistics";
import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import {getDice} from './Actions/actions.js'

class App extends Component {
  componentDidMount(){
    this.props.getDice()
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/stats" component={Statistics} />
        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDice: () => dispatch(getDice())
  }
}
export default connect(null,mapDispatchToProps)(App);
