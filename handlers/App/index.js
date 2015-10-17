import React from 'react';
import {Resolver} from 'react-resolver';

let MenuItems = require('./MenuItems');
let Options = require('./Options');
let appAreas = require('../../data/povertyData');;
let App = React.createClass({

  getInitialState () {
    return {
      activeItemIndex: null, // App starts without an Item selected
      balance: 2000,
      page: 2, // This is order.
      diverged: false,
      budgetBusted: false,
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
      console.log('no way!')
    } else {
      this.setState({balance}); 
    }
  },
  
  
  
  setPage () {
    let page = this.state.page;

    // If you diverge, return the user to the spot they were (don't iterate the page.)
    if (this.state.diverged) {
      this.setState({page: page, diverged: false, activeItemIndex: page});
    } else {
      this.setState({page: page + 1, diverged: false, activeItemIndex: page});  
    }
  },
  
  /**
   This generates everything between the drawer and the running balance.
   */
  
  nextButton (min, item) {
      console.log("Your balance is: " + this.state.balance);
      console.log("Your min is: " + min);
      if (this.state.balance >= min && item.set === null) {
        return <p>Please make a selection</p>;
      } else if (this.state.balance >= min || item.set != null || item.type ==="fact") {
        return <button type="button" onClick={this.setPage}>Next</button>;
      } else {
        return <p>You are out of money! You need to go back and adjust your monthly budget.</p>;
      }
    },

  cyclePage (item) {
    console.log("Page: " + this.state.page); // For debugging
    console.log("ActiveItemIndex: " + this.state.activeItemIndex); // For debugging
    console.log("Diverged: " + this.state.diverged); // For debugging
    
    /**
     * By default, the item displayed is what you click on in the drawer.
     * But if you're clicking Next (state is not diverged from order), then
     * override that and set the item to the next page.
     */
    if (!this.state.diverged) {
      item = appAreas[this.state.page-1];
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
          <h3>{item.name}</h3>
          <img src={item.sectionImage} className="sectionIcon" />

          <p>{item.desc}</p>

          <Options 
            handleBalance={this.handleBalance}
            balance={this.state.balance} 
            selectedItem={item} />
          {this.nextButton(min, item)}
        </div>
    );
  },
  
  render () {
    
    let selectedItem = appAreas[this.state.activeItemIndex]; // load the data
    
    return (
      <div>
        <h1>Charmeck PovSim</h1>
      
        <div className="itemDrawer">
          <MenuItems 
            onActivate={this.handleItem}  // give the MenuItems component access to this.handleItem via this.props.onActivate
            activeItemIndex={this.state.activeItemIndex}  // give the MenuItems component the ability to pass things to App's state
            diverged={this.state.diverged}
            menuItems={appAreas} />
        </div>
      
        {selectedItem ? <div>{this.cyclePage(selectedItem)}</div> : null}
      
        <p>${this.state.balance}</p>
        
      </div>
  )}
})

App.displayName = 'App';

export default App;
