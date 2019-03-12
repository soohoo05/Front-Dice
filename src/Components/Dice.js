import React from 'react';
import { connect } from "react-redux";
import { deleteDice, changeDice } from '../Actions/actions'
class Dice extends React.Component {
  state={
    roll:this.props.roll
  }
  RollHandler = (e) => {
    this.setState({
      roll:e.target.value
    })
    this.props.changeDice(e.target.value,this.props.id)
  }
  render() {
    return  (
      <div className="Dice">
        <p>Dice ID: {this.props.id}</p>
        <img alt="dice" src={require(`../Imgs/dice_${this.props.roll}.png`)}/>
        <br/>
        <button onClick={()=>this.props.deleteDice(this.props.roll._id)}>Delete</button>
          <br/>

          <select onChange={(e)=>this.RollHandler(e)} value={this.state.roll}>
   <option value="1">1</option>
   <option value="2">2</option>
   <option value="3">3</option>
   <option value="4">4</option>
     <option value="5">5</option>
       <option value="6">6</option>

 </select>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteDice: (id) => dispatch(deleteDice(id)),
    changeDice: (roll,id) => dispatch(changeDice(roll,id))
  }
}
export default connect(null,mapDispatchToProps)(Dice);
