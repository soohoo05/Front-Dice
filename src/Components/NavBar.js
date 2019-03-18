import React from 'react';
import {withRouter, Link} from 'react-router-dom'
class NavBar extends React.Component {
  render() {
    return (<div>
        <button onClick={()=>this.props.history.replace('/')}>Home</button>
          <button onClick={()=>this.props.history.replace('/stats')}>Stats</button>        
    </div>)
  }
}

export default withRouter(NavBar);
