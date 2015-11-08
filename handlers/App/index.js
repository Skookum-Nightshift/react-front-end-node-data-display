import React from 'react/addons';
import {Resolver} from 'react-resolver';
import MenuItems from 'MenuItems';
import AppBody from 'AppBody';
import appAreas from '../../data/povertyData';

const FontAwesome = require('react-fontawesome');

let {CSSTransitionGroup} = React.addons;
require('./styles.css');

let App = React.createClass({

  getInitialState () {
    return {
      navOpen: false,
      activeItemIndex: null, // App starts without an Item selected
      balance: 2000,
      page: 2, // This is order.
      diverged: false,
      budgetBusted: false,
      completed: false,
      getInvolved: false,
      currentOption: null, // initially same as lastOption, BalanceBar looks at this
      lastOption: null     // right after diverge, BalanceBar gets this
    };
  },

  /**
   * Sets the state of activeItemIndex to the index of the clicked LI, forces a re-render.
   * This runs when a page is accessed from a click on an item in the modal menu. That means 
   * that the person has diverged from the normal order of the pages. So it sets the 'diverged'
   * flag to true. That way, the app can decide if it should display the next item or the item
   * that was clicked.
   */
  handleItem (activeItemIndex) {
    this.setState({activeItemIndex});

    // get the $ option for the diverged item to change it to yellow
    let currentOption = appAreas[activeItemIndex].set;

    this.setState({diverged: true, currentOption: currentOption});
  },
  
  
  // Don't let the balance get below 0
  // If user diverged, then when they change their choice, don't change lastOption
  handleBalance (balance, option) {
    if (balance < 0) {
      console.log('Balance went below 0! That is not right!');
    } else if (this.state.diverged === false) {
      this.setState({balance: balance, currentOption: option, lastOption: option});
    } else {
      this.setState({balance: balance, currentOption: option});
    }
  },
  
  setPage () {
    let page = this.state.page;
    
    // once clicked, remove the Next button so that it cannot be clicked again during the ReactCSSTransition
    let nextButton = document.getElementById('nextButton');
    nextButton.parentNode.removeChild(nextButton);

    if (page === appAreas.length) {
      this.setState({completed: true});
    }

    // If you diverge, return the user to the spot they were (don't iterate the page.)
    if (this.state.diverged) {
      this.setState({page: page, diverged: false, activeItemIndex: page, currentOption: this.state.lastOption});
      this.setState({lastOption: 0});
    } else {
      // set currentOption state back to 0 so that BalanceBar changes option to spent.
      this.setState({page: page + 1, diverged: false, activeItemIndex: page, currentOption: 0, lastOption: 0});
    }
  },

  setOwnerState (state, description) {
    console.log("State set: " + description);
    this.setState(state);
  },
  
  render () {
    
    let selectedItem = appAreas[this.state.activeItemIndex]; // load the data
    
    return (
      <div id="appWrapper" className={this.state.navOpen === true ? "noOverflow" : null}>
        <div id="appBarContainer">
          <div id="appBar">
            <h1>Paycheck to Paycheck</h1>
            <div id="menuButton">
              <a href="#" onClick={this.setOwnerState.bind(null, {navOpen: true}, "Open modal menu")}><FontAwesome name="bars"/></a>
            </div>
          </div>
        </div>

        <AppBody 
          id='AppBody' 
          selectedItem={selectedItem} 
          menuItems={appAreas} 
          handleBalance={this.handleBalance} 
          diverged={this.state.diverged} 
          page={this.state.page}
          balance={this.state.balance}
          activeItemIndex={this.state.activeItemIndex} 
          setPage={this.setPage} 
          setOwnerState={this.setOwnerState}
          appCompleted={this.state.completed} 
          getInvolved={this.state.getInvolved}
          setToCompleted={this.setToCompleted}
          currentOption={this.state.currentOption} />
      
        <CSSTransitionGroup 
          transitionName="modalTransition" 
          transitionEnterTimeout={600} 
          transitionLeaveTimeout={600}>
          {this.state.navOpen === true ?
            <MenuItems 
              id='MenuItems' 
              setOwnerState={this.setOwnerState} 
              onActivate={this.handleItem} 
              activeItemIndex={this.state.activeItemIndex} 
              menuItems={appAreas}
              page={this.state.page}
              balance={this.state.balance} />
          : null}
        </CSSTransitionGroup>
      </div>
  )}
})

App.displayName = 'App';

export default App;