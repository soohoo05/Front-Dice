import React from 'react';
import { connect } from "react-redux";
import {createDice, getStatistics} from '../Actions/actions.js'
import DiceContainer from '../Container/DiceContainer'

class Home extends React.Component {
  createDice = (num) => {
    let count=0
    while(count!==num){
    this.props.createDice()
    count++
  }
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.createDice(1)}>Create Dice</button>
          <br/>
          <button onClick={()=>this.createDice(100)}>Create Dice x100</button>
        <br/>
          <br/>

        <DiceContainer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createDice: () => dispatch(createDice())

  }
}

export default connect(null,mapDispatchToProps)(Home);
