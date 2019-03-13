import React from 'react';
import { connect } from "react-redux";

class Statcontainer extends React.Component {
  render() {
    let {stats}=this.props
    return (
      <div>
      <h1>Dice Count: {stats.total}</h1>
      <h1>%</h1>
      <div>
      <span>1: {stats["1%"]}% |  </span>
      <span>2: {stats["2%"]}% |  </span>
      <span>3: {stats["3%"]}% |  </span>
      <span>4: {stats["4%"]}% |  </span>
      <span>5: {stats["5%"]}% |  </span>
      <span>6: {stats["6%"]}%   </span>

      </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    stats:state.stats
  }
}
export default connect(mapStateToProps)(Statcontainer);
