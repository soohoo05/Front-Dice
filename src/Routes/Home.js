import React from 'react';
import { connect } from "react-redux";
import {createDice} from '../Actions/actions.js'
import DiceContainer from '../Container/DiceContainer'
class Home extends React.Component {
  render() {
    return (
      <div>
        <button onClick={()=>this.props.createDice()}>Create Dice</button>
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
