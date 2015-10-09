import React from 'react';
import {Resolver} from 'react-resolver';

/* TODOs: 
* Refactor and separate out Components.
* Continue working on the logic.
* Prevent users from skipping ahead. Only should be able to revisit budget item that they've already visited using Next.
* Add in setBacks.
* Set up a fail state for cases when the user is too greedy up front.
* Move appAreas[i].set to React's state.
* Create more TODOs.
* Make it look prettier.
*/

let appAreas = [
  {name: "Housing", desc: "Choose a housing budget.", options: [500, 700, 900], set: null, order: 0,
   sectionImage: "http://simpleicon.com/wp-content/uploads/home-7.png",
   optionDesc: [
     "1 bedroom, 1 bath apartment, unfurnished, no patio or yard, street parking, and stove only", 
     "2 bedroom, 1 bath apartment, unfurnished, covered patio, 1 parking space, stove, and refrigerator", 
     "3 bedroom, 11/2 bath house, unfurnished, small yard, 2 car garage, stove, refrigerator, and dishwasher"]},
  {name: "Transportation", desc: "Choose a transportation budget.", options: [50, 100, 200], set: null, order: 1,
   sectionImage: "http://simpleicon.com/wp-content/uploads/car_4.png",
   optionDesc: [
     "Small", 
     "Medium", 
     "Large"]},
  {name: "Food", desc: "Choose a food budget.", options: [500, 700, 900], set: null, order: 4,
   sectionImage: "http://simpleicon.com/wp-content/uploads/apple.png",
   optionDesc: [
     "Small", 
     "Medium", 
     "Large"]},
  {name: "Health", desc: "You need healthcare too.", options: [250, 500, 750], set: null, order: 3,
   sectionImage: "http://simpleicon.com/wp-content/uploads/docter__nurse_1.png",
   optionDesc: [
     "Small", 
     "Medium", 
     "Large"]},
  {name: "Communications", desc: "Phone, internet, etc.", options: [50, 200, 400], set: null, order: 2,
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: [
     "Small", 
     "Medium", 
     "Large"]},
];

/* The idea is that we can flexibly define the order in which screens 
should appear whether the item is an appArea, setBack, discussion, or 
whatever screen. The order should also be saved to state so that the 
game can continue if interrupted by a budget adjustment.*/
let setBacks = [{order: 5}];


let MenuItems = React.createClass({
  
  handleItemClick (activeItemIndex) {
     /* pass the index of the clicked LI to the parent Component's 
     onActivate prop, which happens to be the handleItem method */
    this.props.onActivate(activeItemIndex);
  },
  
  renderMenuItems () {
    let activeItemIndex = this.props.activeItemIndex;
    return (
      this.props.menuItems.map((item, index) => // pass in each item in the array along with its index
        <li onClick={this.handleItemClick.bind(this, index)} // pass the index to the handleItemClick method
            className={index === activeItemIndex ? "bold" : null}>
          {item.name}
        </li>
      )
    );
  },  
  
  render () {
    return (
      <div>
        <ul>{this.renderMenuItems()}</ul>
        {this.props.children}
      </div>
    );
  }
});


let Options = React.createClass({
  
  setBalance (item, cost, choice) {
    let bal = this.props.balance;
    
    /* If the budget for the item has not been set, set it to the cost of
    the item clicked and deduct that from the budget. If it HAS been set
    and your changing your choice, add the originally set amount back into 
    the budget, update the item's 'set' key, and deduct the newly selected
    amount from the budget. */
    if (item['set'] === null) {
      item['set'] = cost;
      bal -= cost;
    } else {
      bal += item['set'];
      item['set'] = cost;
      bal -= cost;
    }
    
    this.props.handleBalance(bal);
  },
  
  renderOptionsDesc () {
    let item = this.props.selectedItem;
    let index = item.options.indexOf(item.set);

    return (
      <p>{item.optionDesc[index]}</p>
    );
  },
  
  renderOptions () {
    let item = this.props.selectedItem;
    
    return (
      item.options.map((cost, index) =>
        
        /* When a selection is made, update the balance, set the class
        (to make the selection red), and then determine whether the selection
        should be disabled or not. If a selection has been made and the button's
        cost is less than the selection, it should always be enabled. You always
        want to allow people to decrease their budget. If no selection has been
        made, then disable whatever doesn't fit within their budget. */
        
        <button type="button" 
                onClick={this.setBalance.bind(this, item, cost, index)}
                className={cost === item.set ? "activeOption" : null}
                disabled={(item.set != null && cost < item.set) ? 
                          false : 
                          (cost > this.props.balance ? true : false)}>
          {cost}
        </button>
        
      )
    );
  },  
  
  render () {
    return (
      <div>
        {this.renderOptionsDesc()}
        {this.renderOptions()}
      </div>
    );
  }
});


let App = React.createClass({

  getInitialState () {
    return {
      activeItemIndex: null, // App starts without an Item selected
      balance: 2500,
      page: 0, // This is order.
      diverged: false,
    };
  },
  
  handleItem (activeItemIndex) {
    // sets the state of activeItemIndex to the index of the clicked LI forces a re-render
    this.setState({activeItemIndex});
    this.setState({diverged: true});
  },
  
  
  // Don't let the balance get below 0
  handleBalance (balance) {
    if (balance < 0) {
      console.log('no way!') // TODO: Make a better message appear in the body
    } else {
      this.setState({balance}); 
    }
  },
  
  setPage () {
    let page = this.state.page;
    this.setState({page: page += 1, diverged: false, activeItemIndex: page - 1});
    
    // This is for getting the object by order key.
    // TODO: Build that out to search multiple arrays based on order so we can easily intersperse
    var getIndexIfObjWithOwnAttr = function(array, attr, value) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].hasOwnProperty(attr) && array[i][attr] === value) {
                return i;
            }
        }
        return -1;
    };
    
    // alert(getIndexIfObjWithOwnAttr(this.props.menuItems, 'order', 2));
  },
  
  cyclePage (item) {
    console.log("Page: " + this.state.page);
    console.log("ActiveItemIndex: " + this.state.activeItemIndex);
    console.log("Diverged: " + this.state.diverged);
    
    if (!this.state.diverged) {
      
      item = appAreas[this.state.page-1];
    };
    
    return (
        <div>
          <h3>{item.name}</h3>
          <img src={item.sectionImage} className="sectionIcon" />

          <p>{item.desc}</p>

          <Options 
            handleBalance={this.handleBalance}
            balance={this.state.balance} 
            selectedItem={item} />
          <button type="button" onClick={this.setPage}>Next</button>
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
			  onActivate={this.handleItem} 
			  activeItemIndex={this.state.activeItemIndex} 
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
