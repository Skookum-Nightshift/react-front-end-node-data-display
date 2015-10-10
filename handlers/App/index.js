import React from 'react';
import {Resolver} from 'react-resolver';

/* TODOs: 
* Guide the user through creating the budget one step at a time.
* Set up a fail state for cases when the user is too greedy up front.
* Make it so that setbacks are only seen once. (I'm thinking about using the visited flag on the object for that.)
* Keep users from skipping ahead.
* Make it pretty.
* More comments!
* Refactor the heck out of this thing.
*/

let appAreas = [
  {name: "Housing", desc: "Choose a housing budget.", options: [700, 830, 950], set: null, type: "normal",
   sectionImage: "http://simpleicon.com/wp-content/uploads/home-7.png",
   optionDesc: [
     "1 bedroom, 1 bath apartment, unfurnished, no patio or yard, street parking, and stove only", 
     "2 bedroom, 1 bath apartment, unfurnished, covered patio, 1 parking space, stove, and refrigerator", 
     "3 bedroom, 11/2 bath house, unfurnished, small yard, 2 car garage, stove, refrigerator, and dishwasher"]},
  {name: "Housing Fact", desc: "Fair Market Rent for a 2 bedroom in Mecklenburg County is $831 a month. Nearly 50% of renters in Charlotte-Mecklenburg spend more than 30% of their income on housing.", options: [], set: null, type: "fact",
   sectionImage: "http://simpleicon.com/wp-content/uploads/home-7.png",
   optionDesc: []},
  {name: "Food", desc: "Choose a food budget.", options: [80, 180, 280], set: null, type: "normal",
   sectionImage: "http://simpleicon.com/wp-content/uploads/apple.png",
   optionDesc: [
     "1 meal a day", 
     "2 meals a day", 
     "3 meals a day + snacks"]},
  {name: "Food Fact", desc: "In our five-county region, 69,154 households receive food stamps. This is an 83% increase from 2008. And accounts for 12% of households in the region.", options: [], set: null, type: "fact",
   sectionImage: "http://simpleicon.com/wp-content/uploads/apple.png",
   optionDesc: []},
  {name: "Transportation", desc: "Choose a transportation budget.", options: [0, 80, 360], set: null, type: "normal",
   sectionImage: "http://simpleicon.com/wp-content/uploads/car_4.png",
   optionDesc: [
     "Walk or bike everywhere.", 
     "Walk, bike, or take public transit.", 
     "Own your own car."]},
  {name: "Transportation Fact", desc: "It takes the average Charlottean 30 minutes to travel to work, for workers age 16 years+, 2009-2013.", options: [], set: null, type: "fact",
   sectionImage: "http://simpleicon.com/wp-content/uploads/car_4.png",
   optionDesc: []},
  {name: "Uh oh!", desc: "Your dog got rabies. You need to take him to the vet before he goes on a rabid rampage!", 
   options: [100, 200], set: null, type: "setback", visited: 0,
   sectionImage: "https://cdn3.iconfinder.com/data/icons/medical-5-1/512/rabies-512.png",
   optionDesc: [
     "Cheaper medicine, but it could work.", 
     "Good medicine. Definitely will work."]},
  {name: "Health", desc: "You need healthcare too.", options: [0, 52, 134], set: null, type: "normal",
   sectionImage: "http://simpleicon.com/wp-content/uploads/docter__nurse_1.png",
   optionDesc: [
     "No health insurance, you pay for all health related costs", 
     "Health insurance for you through your employer but no health insurance for your family members", 
     "Health insurance for you and your family through your employer"]},
  {name: "Health Fact", desc: "18.5% of Mecklenburg residents do not have health insurance (under age 65).", options: [], set: null, type: "fact",
   sectionImage: "http://simpleicon.com/wp-content/uploads/docter__nurse_1.png",
   optionDesc: []},
  {name: "Technology", desc: "Phone, internet, etc.", options: [0, 80, 220], set: null, type: "normal",
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: [
     "No computer, no cell phone, TV with no cable", 
     "No computer, 2 cell phones, TV with no cable", 
     "Home computer, TV with cable, 2 smart phones"]},
  {name: "Technology Fact", desc: "Technology Fact listed here. This will be a good one!", options: [], set: null, type: "fact",
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: []}
];

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
        <li className={item.type != "normal" ? "hidden" : (index === activeItemIndex ? "bold" : null)}>
        <a href="#" onClick={this.handleItemClick.bind(this, index)}>
          {item.name}
        </a>
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
        <div className="btn-group" role="group">{this.renderOptions()}</div>
      </div>
    );
  }
});


let App = React.createClass({

  getInitialState () {
    return {
      activeItemIndex: null, // App starts without an Item selected
      balance: 2000,
      page: 0, // This is order.
      diverged: false
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
    this.setState({page: page + 1, diverged: false, activeItemIndex: page});
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
