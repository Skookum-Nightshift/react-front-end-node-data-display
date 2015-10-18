import React from 'react';
import {Resolver} from 'react-resolver';
import injectTapEventPlugin from "react-tap-event-plugin";
import LeftNav from 'LeftNav';

const FontAwesome = require('react-fontawesome');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const MyRawTheme = require('../../theme/rawTheme');
const AppBar = require('material-ui/lib/app-bar');
const FlatButton = require('material-ui/lib/flat-button');
const RaisedButton = require('material-ui/lib/raised-button');
const IconButton = require('material-ui/lib/icon-button');

let MenuItems = require('./MenuItems');
let AppBody = require('./AppBody');
let appAreas = require('../../data/povertyData');
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

  componentDidMount() {
    injectTapEventPlugin();
  },

  handleClick () {
    alert('We\'re up and running, Dude!');
  },

  toggle () {
    this.setState({navOpen: true});
  },

  showOverlay() {
    console.log('Hey');
  },

  closeNav() {
    this.setState({ navOpen: false });
  },

  //set up the theme
  childContextTypes : {
      muiTheme: React.PropTypes.object,
    },

    getChildContext() {
      return {
          muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
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
  
  /**
   This generates everything between the drawer and the running balance.
   */
  
  render () {
    
    console.log(this.state.page);
    console.log(this.state.activeItemIndex);

    let selectedItem = appAreas[this.state.activeItemIndex]; // load the data
    
    return (
      <div>
        <div>
            <AppBar
              iconElementRight={<FlatButton label={<FontAwesome name="dollar" size='2x'/>} toolTip="Budget" tooltipPosition="right" onClick={this.toggle} />}
              title="UWCC Poverty Sim"
              showMenuIconButton={false}/>
        </div>
        <div>
          <LeftNav ref="leftNav" open={this.state.navOpen}
            onActivate={this.handleItem}  // give the MenuItems component access to this.handleItem via this.props.onActivate
            activeItemIndex={this.state.activeItemIndex}  // give the MenuItems component the ability to pass things to App's state
            diverged={this.state.diverged}
            menuItems={appAreas} />
          {this.state.navOpen ? <div className="LeftNavOverlay" docked={false} onClick={this.closeNav}></div> : ""}
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
      
        <p>${this.state.balance}</p>
      </div>
  )}
})

App.displayName = 'App';

export default App;
