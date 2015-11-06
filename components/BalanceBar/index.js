/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class BalanceBar extends React.Component {
  
  constructor() {
    super();
  }
 
  render() {
    
    let budget 	 = 2000;
    let bal 		 = this.props.balance;
    let spending = this.props.currentOption;

    let spendingPercent = (spending / budget * 100);
    let balPercent 			= (bal / budget * 100);
    let spentPercent 		= (100 - spendingPercent - balPercent);
    
    return (
      <div>
        <div className='balanceBar'>
          <div className='balanceSection spent' style={{'width': spentPercent+'%'}}></div>
          <div className='balanceSection spending' style={{'width': spendingPercent+'%'}}></div>
          <div className='balanceSection left' style={{'width': balPercent+'%'}}><p>${bal} left</p></div>    
        </div>
      </div>
    );
  }
}

BalanceBar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BalanceBar;
