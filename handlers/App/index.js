import React from 'react';
import {Resolver} from 'react-resolver';

/**  
 * This should be moved to its own JSON file. The app follows the order of this array. 
 *
 * name (string): the page's heading
 * desc (string): The description under the icon/image.
 * options (array of integers): each item can have as many or as few budget options as necessary.
 * set (integer, default: null): The app currently uses this to set state for remembering what option was 
 *   selected. Move out of appAreas and into app state? One benefit is that this can be used to set an  
 *   optional default other than null.
 * type (string: normal, fact, setback, etc.) When set to "normal", the item name will appear in the drawer.
 * optionDesc: an array of strings, each coinciding with the earlier array of options.
 */
 
let appAreas = [
  {name: "Housing", desc: "What kind of home will you live in?", options: [700, 830, 950], set: null, type: "normal", visited: true,
   sectionImage: "http://simpleicon.com/wp-content/uploads/home-7.png",
   optionDesc: [
     "1 bedroom, 1 bath apartment, no patio or yard, street parking, and stove only", 
     "2 bedroom, 1 bath apartment, covered patio, 1 parking space, stove, and refrigerator", 
     "3 bedroom, 11/2 bath house, small yard, 2 car garage, stove, refrigerator, and dishwasher"]},
  {name: "Housing Fact", desc: "Fair Market Rent for a 2 bedroom in Mecklenburg County is $831 a month. Nearly 50% of renters in Charlotte-Mecklenburg spend more than 30% of their income on housing.", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/home-7.png",
   optionDesc: []},
  {name: "Food", desc: "What's your food budget?", options: [80, 180, 280], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/curry.png",
   optionDesc: [
     "1 meal a day", 
     "2 meals a day", 
     "3 meals a day + snacks"]},
  {name: "Food Fact", desc: "69,154 households receive food stamps in the Charlotte five county region.", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/pizza.png",
   optionDesc: []},
  {name: "Transportation", desc: "How will you get around?", options: [0, 80, 360], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/car_4.png",
   optionDesc: [
     "Walk or bike everywhere", 
     "Walk, bike, and public transit", 
     "Have your own car, with a monthly payment"]},
  {name: "Transportation Fact", desc: "It takes the average Charlottean 30 minutes to travel to work, for workers age 16 years+, 2009-2013.", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/car_11.png",
   optionDesc: []},
  {name: "Oh no!!", desc: "Your dog got rabies. You need to take him to the vet before he goes on a rabid rampage!", 
   options: [100, 200], set: null, type: "setback", visited: false,
   sectionImage: "https://cdn3.iconfinder.com/data/icons/medical-5-1/512/rabies-512.png",
   optionDesc: [
     "Cheap medicine. It might work.", 
     "Good medicine. Definitely will work."]},
  {name: "Health", desc: "What kind of healthcare do you have?", options: [0, 52, 134], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/docter__nurse_1.png",
   optionDesc: [
     "No health insurance", 
     "Health insurance for you only", 
     "Health insurance for you and your family"]},
  {name: "Health Fact", desc: "18.5% of Mecklenburg residents do not have health insurance (under age 65).", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/stethoscope1.png",
   optionDesc: []},
  {name: "Technology", desc: "What type of electronics do you have?", options: [35, 80, 220], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: [
     "1 cell phone", 
     "2 cell phones, TV but no cable", 
     "2 smart phones, TV with cable, home computer"]},
  {name: "Technology Fact", desc: "Technology Fact listed here. This will be a good one!", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/tv_table.png",
   optionDesc: []},
  {name: "Oh no!!", desc: "Your daughter got sick. How will you handle the trip to the emergency room and medication?", 
   options: [100, 140], set: null, type: "setback", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/ambulance1.png",
   optionDesc: [
     "Emergency room visit, no medication", 
     "Emergency room plus medication"]},
  {name: "Family Leisure", desc: "Choose your fun family outings and leisure time.", options: [0, 100, 200], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/fruit_basket.png",
   optionDesc: [
     "No family outings, maybe visiting local friends and family", 
     "1 family activity, like a local park, picnic, bowling, or local music show", 
     "2 family activities, like eating out, movies, or a concert"]},
  {name: "Family Leisure Fact", desc: "Spending family time on leisure activities together is associated with greater emotional bonding, better communication, better school grades, and less behavioral problems. ", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/bowling_ball_2.png",
   optionDesc: []},
  {name: "Oh no!!", desc: "Your son wants to join the school soccer team.", 
   options: [0, 80], set: null, type: "setback", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/football1.png",
   optionDesc: [
     "He does not participate", 
     "Cleats, shin pads, uniform, and ball"]},
  {name: "Laundry", desc: "Where will you do laundry?", options: [20, 30, 60], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: [
     "Laundromat", 
     "Shared laundry room", 
     "Payment for your own washer and dryer"]},
  {name: "Laundry Fact", desc: "A really good fact about Laundry and utilities.", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/mobile_phone.png",
   optionDesc: []},
  {name: "Savings", desc: "Do you have any money for savings or unexpected expenses?", options: [0, 100, 200], set: null, type: "normal", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/money-bag-4.png",
   optionDesc: [
     "Nothing left for savings after other expenses", 
     "$20 for savings", 
     "$100 for savings"]},
  {name: "Savings Fact", desc: "A savings reserve is often unavailble for those in poverty.", options: [], set: null, type: "fact", visited: false,
   sectionImage: "http://simpleicon.com/wp-content/uploads/money-5.png",
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
    
    /**
     * If the budget for the item has not been set, set it to the cost of
     * the item clicked and deduct that from the budget. If it HAS been set
     * and you're changing your choice, add the originally set amount back into 
     * the budget, update the item's 'set' key, and deduct the newly selected
     * amount from the budget. 
     */
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
        
        /** 
         * When a selection is made, update the balance, set the class
         * (to make the selection red), and then determine whether the selection
         * should be disabled or not. If a selection has been made and the button's
         * cost is less than the selection, it should always be enabled. You always
         * want to allow people to decrease their budget. If no selection has been
         * made, then disable whatever doesn't fit within their budget.
         */
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
      balance: 2500,
      page: 0, // This is order.
      diverged: false
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
    this.setState({page: page + 1, diverged: false, activeItemIndex: page});
  },
  
  /**
   This generates everything between the drawer and the running balance.
   */
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
    console.log(JSON.stringify(appAreas));
    
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
