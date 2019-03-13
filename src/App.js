import React, { Component } from 'react';
import './App.css';
import Home from "./Routes/Home";
import StatContainer from "./Routes/StatContainer";
import NavBar from './Components/NavBar'
import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import {getDice, getStatistics} from './Actions/actions.js'

class App extends Component {
  componentDidMount(){
    this.props.getDice()
    this.props.getStatistics()
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Home} />
            <Route exact path="/stats" component={StatContainer} />

        </Switch>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDice: () => dispatch(getDice()),
    getStatistics: () => dispatch(getStatistics())
  }
}
export default connect(null,mapDispatchToProps)(App);
