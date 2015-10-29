import React from 'react';
import {Resolver} from 'react-resolver';

require('./styles.css');

const RaisedButton = require('material-ui/lib/raised-button');

import Options from 'Options';

class AppBody extends React.Component {

  constructor () {
    super();

    this.nextButton = this.nextButton.bind(this);
    this.cyclePage = this.cyclePage.bind(this);
    this.beginOrEnd = this.beginOrEnd.bind(this);
  }

  nextButton (min, item) {
    console.log("Your balance is: " + this.props.balance);
    console.log("Your min is: " + min);
    if (this.props.appCompleted === true) {
      return <RaisedButton label='Return to Summary' onClick={this.props.unDiverge} />;
    } else if (this.props.balance >= min && item.set === null) {
      return <RaisedButton label='Make a Choice' disabled={true} />;
    } else if (this.props.balance >= min || item.set != null || item.type ==="fact") {
      return <RaisedButton label='next' onClick={this.props.setPage} />;
    } else {
      return <p>You are out of money! You need to go back and adjust your monthly budget.</p>;
    }
  }

  cyclePage (item) {
    console.log("Page: " + this.props.page); // For debugging
    console.log("ActiveItemIndex: " + this.props.activeItemIndex); // For debugging
    console.log("Diverged: " + this.props.diverged); // For debugging
    
    /**
     * By default, the item displayed is what you click on in the drawer.
     * But if you're clicking Next (state is not diverged from order), then
     * override that and set the item to the next page.
     */
    if (!this.props.diverged) {
      item = this.props.menuItems[this.props.page-1];
      /**
       * if you visit the item via Next (linear, non-diverged), then set the 
       * item's visted flag to true so as to enable users to access that item 
       * again later from the drawer.
       */
      item['visited'] = true;
    };

    let min = Math.min.apply(null, item.options);
    
    return (
        <div>
          <h1>{item.name}</h1>

          <Options 
            handleBalance={this.props.handleBalance}
            balance={this.props.balance} 
            selectedItem={item} />
          <div id="actionButton">
            {this.nextButton(min, item)}
          </div>
        </div>
    );
  }

  beginOrEnd (selectedItem) {
    if (this.props.activeItemIndex === null) {
      return (
        <div id="beginState">
          <h1>How to Play...</h1>
          <p>Assume you’re a parent. You work. Your spouse works part-time. You have a 9 year old daughter and 14 year old son.</p>
          <img src="http://simpleicon.com/wp-content/uploads/meeting.png" alt="family of 4" className="sectionIcon" />
          <p>Stay within your limited monthly budget.</p>
          <p>Experience the tough choices of 1 in 5 families in Charlotte.</p>
          <br />
          <RaisedButton label='Begin' onClick={this.props.showFirstQuestion} />
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false) {
      return (
        <div id="endState">
          <h1>How did you fare?</h1>
          <p>You had to make some hard choices! These are the choices of 1 in 5 families in Charlotte.</p>
          <p>United Way works with local charities to help those in need. It is there goal to make Charlotte a great place to live and work for all.</p>
          <RaisedButton linkButton={true} label='twitter' target="_blank" href="http://twitter.com/home?status=I%20completed%20the%20United%20Way%20Poverty%20Simulation%20and%20learned%20about%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families%20%23povisio%20%23CLTaspires%20%40myUWCC" /> <RaisedButton linkButton={true} href="https://www.facebook.com/UWCentralCarolinas" target="_blank" label='facebook' /><br /><br />
          <div id="getInvolved"><RaisedButton label='Get Involved' /></div>
        </div>
      );
    } else {
      return <div>{selectedItem ? <div>{this.cyclePage(selectedItem)}</div> : null}</div>;
    }
  }

  render () {
    let selectedItem = this.props.selectedItem;

    return (
      <div className="appBody" style={{"paddingLeft": "24px", "paddingRight": "24px"}}>{this.beginOrEnd(selectedItem)}</div>
    )
  }
}


AppBody.displayName = 'AppBody';

export default AppBody;
