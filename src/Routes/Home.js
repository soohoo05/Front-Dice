import React from 'react';
import { connect } from "react-redux";
import {createDice, getStatistics} from '../Actions/actions.js'
import DiceContainer from '../Container/DiceContainer'

class Home extends React.Component {
  createDice = () => {
    this.props.createDice()
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.createDice()}>Create Dice</button>
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
