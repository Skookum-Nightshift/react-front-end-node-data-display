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

    let spentBackground = spendingPercent > 0 ? '#9098d3' : '#6fcccc';
    let spendingBackground = balPercent > 0 ? '#6fcccc' : 'transparent';
    
    return (
      <div className='balanceBar'>
        <div className='balanceSection' style={{'width': spentPercent+'%', 'backgroundColor': spentBackground}}>
          <div className='spent'></div>
        </div>
        <div className='balanceSection' style={{'width': spendingPercent+'%', 'backgroundColor': spendingBackground}}>
          <div className='spending'></div>
        </div>
        <div className='balanceSection' style={{'width': balPercent+'%'}}>
          <div className='left'></div>
        </div>
      </div>
    );
  }
}

BalanceBar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default BalanceBar;
