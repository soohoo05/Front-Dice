import React from 'react';
import { connect } from "react-redux";
import Dice from '../Components/Dice'
class DiceContainer extends React.Component {

  render() {
    let dice
    if(this.props.dice){

    dice=this.props.dice.map(dice=><Dice id={dice._id} roll={dice.roll} key={dice._id}/>)
  }
  console.log(this.props.dice.length)
    return (
      <div>
        <p>Dice Count: {this.props.dice.length}</p>
      <div className="DiceContainer">
        {this.props.dice ? dice:null}
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dice:state.dice
  }
}
export default connect(mapStateToProps)(DiceContainer);
