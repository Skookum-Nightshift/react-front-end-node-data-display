import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');
const LeftNav = require('material-ui/lib/left-nav');
const AppBar = require('material-ui/lib/app-bar');

import injectTapEventPlugin from "react-tap-event-plugin";

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const MyRawTheme = require('../../theme/rawTheme');

const menuItems = [
  { text: 'Housing' },
  { text: 'Food' },
  { text: 'Transportation' },
  { text: 'Health' },
  { text: 'Technology' },
  { text: 'Family Leisure' },
  { text: 'Laundry' },
  { text: 'Savings' },
  {
     text: 'Disabled',
     disabled: true
  }
];

const MyAwesomeReactComponent = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

module.exports = MyAwesomeReactComponent;

var Home = React.createClass({

	getInitialState() {
		return {
			navOpen: false
		};
	},

	componentDidMount() {
		injectTapEventPlugin();

		if (!this.state.navOpen) {
			this.refs.leftNav.close();
		}
	},
	handleClick () {
		alert('We\'re up and running, Dude!');
	},
	toggle () {
		this.refs.leftNav.toggle();
		this.setState({navOpen: true});
	},
	showOverlay() {
		console.log('Hey');
	},
	closeNav() {
		this.setState({ navOpen: false });
		this.refs.leftNav.close();
	},

	childContextTypes : {
    	muiTheme: React.PropTypes.object,
  	},

  	getChildContext() {
    	return {
      		muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    	};
  	},

	render () {
		return (
		<div classname="foo">
		<AppBar
            title="UWCC Poverty Sim"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggle}/>
		
		<p>Living in poverty means making hard choices. How would you decide? What are your priorities?</p>
		<p>Learn about poverty in Charlotte-Mecklenburg. How United Way of Central Carolina has helped. And how you can help.</p>
		<h2><a href="/app">Begin</a></h2>
		<p>Just added interspersed setbacks. Can you spot it? Still need work to keep people from skipping ahead, require $ selections, etc.</p>
		
		<p><a href='#' onClick={this.handleClick}>Are we up and running?</a></p>
        <RaisedButton label="Povizio" />
        <br />
		<RaisedButton label="test left nav" primary={true} onClick={this.toggle} />
		<LeftNav ref="leftNav" menuItems={menuItems} onNavOpen={this.showOverlay}/>
		{this.state.navOpen ? <div className="LeftNavOverlay" docked={false} onClick={this.closeNav}></div> : ""}
		</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
