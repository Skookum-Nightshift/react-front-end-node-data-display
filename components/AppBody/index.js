import React from 'react';
import {Resolver} from 'react-resolver';

require('./styles.css');

const FontAwesome = require('react-fontawesome');

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
      return <button className="button next" onClick={this.props.unDiverge}>Return to Summary</button>;
    } else if (this.props.balance >= min && item.set === null) {
      return <button className="button" disabled={true}>Make a Choice</button>;
    } else if (this.props.balance >= min || item.set != null || item.type ==="fact") {
      return <button className="button next" onClick={this.props.setPage}>Next</button>;
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
            selectedItem={item}
            page={this.props.page}
            activeItemIndex={this.props.activeItemIndex} />
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
          <p>Assume you’re a parent. You work. Your spouse works part-time. You have a 7 year old daughter and 12 year old son.</p>
          <img src="http://simpleicon.com/wp-content/uploads/meeting.png" alt="family of 4" className="sectionIcon" />
          <p>Stay within your limited monthly budget.</p>
          <p>Experience the tough choices of 1 in 5 families in Charlotte.</p>
          <br />
          <button className="button next" onClick={this.props.showFirstQuestion}>Begin</button>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === false) {
      return (
        <div id="endState">
          <h1>How did you fare?</h1>
          <p>You had to make some hard choices! These are the choices of 1 in 5 families in Charlotte.</p>
          <p>United Way works with local charities to help those in need. It is there goal to make Charlotte a great place to live and work for all.</p>
          <a href="https://www.facebook.com/UWCentralCarolinas">
            <div className="social"><FontAwesome name="facebook" size="5x"/></div>
          </a>
          <a href="https://twitter.com/home?status=I%20completed%20the%20Paycheck%20to%20Paycheck%20poverty%20app.%20I%20learned%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families%20%40myUWCC%20http%3A//bit.ly/1Rjfrwm">
            <div className="social"><FontAwesome name="twitter" size="5x"/></div>
          </a>
          <br />
          <br /> 
          <div id="getInvolved"><button className="button selected" onClick={this.props.setGetInvolved}>Get Involved</button></div>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === true) {
      return (
        <div id="endState">
          <h1>Get Involved!</h1>
          <p>Click something below to get involved!</p>
          <p>United Way works with local charities to help those in need. It is there goal to make Charlotte a great place to live and work for all.</p>
          <a href="https://www.facebook.com/UWCentralCarolinas">
            <div className="social"><FontAwesome name="facebook" size="5x"/></div>
          </a>
          <a href="https://twitter.com/home?status=I%20completed%20the%20Paycheck%20to%20Paycheck%20poverty%20app.%20I%20learned%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families%20%40myUWCC%20http%3A//bit.ly/1Rjfrwm">
            <div className="social"><FontAwesome name="twitter" size="5x"/></div>
          </a>
          <br />
          <br /> 
          <div id="getInvolved"><button className="button selected" onClick={this.props.setSocialShare}>Share this!</button></div>
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
