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
    };
  },

  /**
   * Sets the state of activeItemIndex to the index of the clicked LI, forces a re-render.
   * This runs when a page is accessed from a click on an item in the drawer. That means 
   * that the person has diverged from the normal order of the pages. So it sets the 'diverged'
   * flag to true. That way, the app can decide if it should display the next item or the item
   * that was clicked.
   */
  handleItem (activeItemIndex) {
    this.setState({activeItemIndex});
    this.setState({diverged: true});
  },
  
  
  // Don't let the balance get below 0
  handleBalance (balance) {
    if (balance < 0) {
      console.log('Balance went below 0! That is not right!')
    } else {
      this.setState({balance}); 
    }
  },
  
  setPage () {
    let page = this.state.page;

    // If you diverge, return the user to the spot they were (don't iterate the page.)
    if (page === appAreas.length) {
      this.setState({completed: true});
    } else if (this.state.diverged) {
      this.setState({page: page, diverged: false, activeItemIndex: page});
    } else {
      this.setState({page: page + 1, diverged: false, activeItemIndex: page});  
    }
  },

  showFirstQuestion () {
    this.setState({page: 2, activeItemIndex: 0, diverged: true});
  },

  setToCompleted () {
    this.setState({completed: true});
  },

  unDiverge () {
    this.setState({diverged: false});
  },

  openModalMenu () {
    this.setState({navOpen: true});
  },

  closeModalMenu () {
    this.setState({navOpen: false});
  },
  
  /**
   This generates everything between the drawer and the running balance.
   */
  
  render () {
    
    let selectedItem = appAreas[this.state.activeItemIndex]; // load the data
    
    return (
      <div id="appWrapper" className={this.state.navOpen === true ? "noOverflow" : null}>
        <div id="appBarContainer">
          <div id="appBar">
            <h1>Paycheck to Paycheck</h1>
            <div id="menuButton">
              <a href="#" onClick={this.openModalMenu}><FontAwesome name="bars"/></a>
            </div>
          </div>
        </div>

        <AppBody 
          selectedItem={selectedItem} 
          menuItems={appAreas} 
          handleBalance={this.handleBalance} 
          diverged={this.state.diverged} 
          page={this.state.page}
          balance={this.state.balance}
          activeItemIndex={this.state.activeItemIndex} 
          setPage={this.setPage} 
          showFirstQuestion={this.showFirstQuestion}
          appCompleted={this.state.completed} 
          unDiverge={this.unDiverge} 
          setToCompleted={this.setToCompleted} />
      
        <div className="balance">
          <p>Your balance is: ${this.state.balance}</p>
        </div>

        <CSSTransitionGroup 
          transitionName="modalTransition" 
          transitionEnterTimeout={600} 
          transitionLeaveTimeout={600}>
          {this.state.navOpen === true ?
            <MenuItems 
              closeModalMenu={this.closeModalMenu} 
              onActivate={this.handleItem} 
              activeItemIndex={this.state.activeItemIndex} 
              menuItems={appAreas} />
          : null}
        </CSSTransitionGroup>
      </div>
  )}
})

App.displayName = 'App';

export default App;