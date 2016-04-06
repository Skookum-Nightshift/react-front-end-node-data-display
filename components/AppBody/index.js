import React from 'react/addons';

let {CSSTransitionGroup} = React.addons;
require('./styles.css');

const FontAwesome = require('react-fontawesome');

import Options from 'Options';
import BalanceBar from 'BalanceBar';
import Isvg from 'react-inlinesvg';

class AppBody extends React.Component {

  constructor () {
    super();
    this.nextButton = this.nextButton.bind(this);
    this.cyclePage = this.cyclePage.bind(this);
    this.beginOrEnd = this.beginOrEnd.bind(this);
  }

  nextButton (min, item) {
    console.log("Your budget is: " + this.props.balance);
    console.log('==========================');
    if (this.props.appCompleted === true) {
      return (
        <a href="#" onClick={this.props.setOwnerState.bind(null, {diverged: false}, "Undiverge")}>
          <div className="button next">Return to Summary</div>
        </a>
      );
    } else if (this.props.balance >= min && item.set === null) {
      return <a><div className="button disabled">Make a Choice</div></a>;
    } else if ((this.props.balance >= min || item.set != null || item.type === "fact") && this.props.diverged == false) {
      return <a href="#" onClick={this.props.setPage} id="nextButton"><div className="button next">Next</div></a>;
    } else if ((this.props.balance >= min || item.set != null || item.type === "fact") && this.props.diverged == true) {
      return <a href="#" onClick={this.props.setPage} id="nextButton"><div className="button next">Continue Where You Left Off</div></a>;
    } else {
      return (
        <span>
          <span id="outOfMoney"><p><b>You are out of money!</b></p><p>You need to make harder choices to stay within your monthly budget.</p></span>
          <a href="#" onClick={this.props.setOwnerState.bind(null, {navOpen: true}, "Show modal menu")} id="nextButton">
            <div className="button next">Adjust Your Budget</div>
          </a>
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
       * item's visited flag to true so as to enable users to access that item
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
          id='Options'
          handleBalance={this.props.handleBalance}
          balance={this.props.balance}
          selectedItem={item}
          page={this.props.page}
          activeItemIndex={this.props.activeItemIndex} />
        <div className="balance">
          <p>You have <b>${this.props.balance}</b> left for the month.</p>
        </div>
        <BalanceBar
          id='BalanceBar'
          currentOption={this.props.currentOption}
          balance={this.props.balance}/>
        <div id="actionButton">
          {this.nextButton(min, item)}
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
          <p>You’re a parent. You work. Your spouse works part-time. You have a 3-year-old daughter and a 12-year-old son.</p><br />
          <p>You live paycheck to paycheck.</p><br />
          <Isvg src="public/img/icons/meeting.svg" alt="family of 4" className="sectionIcon" /><br />
          <p>Stay within your limited monthly budget.<br />
          <br />Experience the tough choices that 1 in 5 families in Charlotte makes every month.</p>
          <br />
          <a href="#" onClick={this.props.setOwnerState.bind(null, {page: 1, activeItemIndex: 0}, "Display first question")}>
            <div className="button next">Begin</div>
          </a>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === false) {
      return (
        <div id="endState">
          <h1>How did you fare?</h1>
          <p>You ended up with ${this.props.balance} and this exercise didn't even cover every expense.</p><br />
          <p>You had to make some hard choices! Living paycheck to paycheck is a reality for over 150,000 people in Mecklenburg County.</p><br />
          <p>United Way creates change for a stronger  community to make Charlotte a great place for all to live and work.</p><br />
          <a style={{'display': 'inline-block'}} target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fpaychecktopaycheck.herokuapp.com%2F&display=popup&ref=plugin&src=share_button">
            <div className="social"><FontAwesome name="facebook" size="5x"/></div>
          </a>
          <a style={{'display': 'inline-block'}} target="_blank" href="https://twitter.com/home?status=I%20completed%20the%20Paycheck%20to%20Paycheck%20poverty%20app.%20I%20learned%20the%20tough%20choices%20of%201%20in%205%20Charlotte%20families%20%40myUWCC%20http%3A//bit.ly/uwccptp">
            <div className="social"><FontAwesome name="twitter" size="5x"/></div>
          </a>
          <br />
          <br />
          <a id="getInvolved" href="#" onClick={this.props.setOwnerState.bind(null, {getInvolved: true}, "Display 'Get Involved' page")}>
            <div className="button selected">Get Involved</div>
          </a>
          <a href="#" onClick={this.props.setOwnerState.bind(null, {navOpen: true}, "Show modal menu")} id="nextButton">
            <div className="button next">Review Your Choices</div>
          </a>
        </div>
      );
    } else if (this.props.appCompleted === true && this.props.diverged === false && this.props.getInvolved === true) {
      return (
        <div id="endState">
          <h1>Get Involved!</h1>
          <p>Click something below to get involved!</p><br />
          <p>United Way creates change for a stronger community by increasing high school graduation, reducing homelessness, empowering healthy lives and providing a safety net of basic needs. This makes Charlotte a great place for ALL to live and work. But we need you!</p><br />

          <a target="_blank" href="http://www.uwcentralcarolinas.org/invest" id="donate">
            <div className="button selected">Donate!</div>
          </a>
          <a target="_blank" href="http://www.uwcentralcarolinas.org/give" id="volunteer">
            <div className="button selected">Volunteer!</div>
          </a><br /><span />
          <a id="getInvolved" href="#" onClick={this.props.setOwnerState.bind(null, {getInvolved: false}, "Display 'Social Share' page")}>
            <div className="button selected">Share this!</div>
          </a>
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
            <p>You have <b>${this.props.balance}</b> left for the month.</p>
            <BalanceBar
              id='BalanceBar'
              currentOption={this.props.currentOption}
              balance={this.props.balance}
            />
          </div>
        : null}
      </div>

    )
  }
}

AppBody.displayName = 'AppBody';

export default AppBody;
