import React from 'react/addons';
import {Resolver} from 'react-resolver';

let {CSSTransitionGroup} = React.addons;
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
    console.log("Your budget is: " + this.props.balance);
    console.log("Your min is: " + min);
    if (this.props.appCompleted === true) {
      return <a href="#" onClick={this.props.unDiverge}><div className="button next">Return to Summary</div></a>;
    } else if (this.props.balance >= min && item.set === null) {
      return <a><div className="button disabled">Make a Choice</div></a>;
    } else if (this.props.balance >= min || item.set != null || item.type ==="fact") {
      return <a href="#" onClick={this.props.setPage} id="nextButton"><div className="button next">Next</div></a>;
    } else {
      return (
        <span>
          <p>You are out of money!<br /><br />You need to make harder choices to stay within your monthly budget.</p>
          <a href="#" onClick={this.props.openModalMenu} id="nextButton"><div className="button next">Adjust Your Budget</div></a>
        </span>
      );
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
      <CSSTransitionGroup transitionName="appBodyTransition" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
      <div key={item.name} className="animated">
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
        <div className="balance">
          <p>Your budget is: ${this.props.balance}</p>
        </div>
      </div>
      </CSSTransitionGroup>
    );
  }

  beginOrEnd (selectedItem) {
    if (this.props.activeItemIndex === null) {
      return (
        <div id="beginState">
          <h1>Assume...</h1>
          <p>You’re a parent. You work. Your spouse works part-time. You have a 7-year-old daughter and 12-year-old son.</p><br />
          <p>You live paycheck to paycheck.</p><br />
          <img src="http://simpleicon.com/wp-content/uploads/meeting.png" alt="family of 4" className="sectionIcon" /><br />
          <p>Stay within your limited monthly budget.<br />
          <br />Experience the tough choices of 1 in 5 families in Charlotte.</p>
          <br />
          <a href="#" onClick={this.props.showFirstQuestion}><div className="button next">Begin</div></a>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === false) {
      return (
        <div id="endState">
          <h1>How did you fare?</h1>
          <p>You had to make some hard choices! These are the choices of 1 in 5 families in Charlotte.</p><br />
          <p>United Way works with local charities to help those in need. It is there goal to make Charlotte a great place to live and work for all.</p><br />
          <a href="https://www.facebook.com/dialog/feed?app_id=928451220563474&link=http://povsim-staging.herokuapp.com/&picture=http://povsim-staging.herokuapp.com/public/img/uncc_logo2.png&name=Paycheck%20to%20Paycheck&description=I%20completed%20the%20Paycheck%20to%20Paycheck%20poverty%20app.%20I%20learned%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families.&redirect_uri=http://povsim-staging.herokuapp.com/">
            <div className="social"><FontAwesome name="facebook" size="5x"/></div>
          </a>
          <a href="https://twitter.com/home?status=I%20completed%20the%20Paycheck%20to%20Paycheck%20poverty%20app.%20I%20learned%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families%20%40myUWCC%20http%3A//bit.ly/1Rjfrwm">
            <div className="social"><FontAwesome name="twitter" size="5x"/></div>
          </a>
          <br />
          <br /> 
          <a href="#" onClick={this.props.setGetInvolved}><div id="getInvolved" className="button selected">Get Involved</div></a>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === true) {
      return (
        <div id="endState">
          <h1>Get Involved!</h1>
          <p>Click something below to get involved!</p>
          <p>United Way works with local charities to help those in need. It is there goal to make Charlotte a great place to live and work for all.</p><br />
          
          <a href="http://www.uwcentralcarolinas.org/invest" id="donate" className="button selected">Donate!</a><br />
          
          <a href="http://www.uwcentralcarolinas.org/give" id="volunteer" className="button selected">Volunteer!</a>
          
          <br />
          <br /> 
          <a href="#" onClick={this.props.setSocialShare}><div id="getInvolved" className="button selected">Share this!</div></a>
        </div>
      );
    } else {
      return <div>{selectedItem ? <div>{this.cyclePage(selectedItem)}</div> : null}</div>;
    }
  }

  render () {
    let selectedItem = this.props.selectedItem;

    return (
      <div className="appBody" style={{"paddingLeft": "24px", "paddingRight": "24px"}}>
        {this.beginOrEnd(selectedItem)}
        {(this.props.appCompleted === true && this.props.diverged === false) ? 
          <div className="balance">
            <p>Your budget is: ${this.props.balance}</p>
          </div>
        : null}
      </div>

    )
  }
}

AppBody.displayName = 'AppBody';

export default AppBody;
