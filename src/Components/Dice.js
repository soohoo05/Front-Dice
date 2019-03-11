import React from 'react';
import { connect } from "react-redux";
import { deleteDice } from '../Actions/actions'
class Dice extends React.Component {
  render() {
    return  (
      <div className="Dice">
        <p>Dice ID: {this.props.id}</p>
        <img alt="dice" src={require(`../Imgs/dice_${this.props.roll}.png`)}/>
        <br/>
        <button onClick={()=>this.props.deleteDice(this.props.id)}>Delete</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteDice: (id) => dispatch(deleteDice(id))
  }
}
export default connect(null,mapDispatchToProps)(Dice);
