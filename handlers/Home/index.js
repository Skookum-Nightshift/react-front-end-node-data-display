import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');
const LeftNav = require('material-ui/lib/left-nav');
const AppBar = require('material-ui/lib/app-bar');

import injectTapEventPlugin from "react-tap-event-plugin";

const menuItems = [
  { text: 'Get Started' },
  { text: 'Customization' },
  { text: 'Components' },
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

	render () {
		return (
		<div classname="foo">
		<AppBar
            title="Charmeck Povsim"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.toggle}/>
        <RaisedButton label="Povizio" />
			<p><a href='#' onClick={this.handleClick}>Are we up and running?</a></p>
			<h2>Check out the <a href="/app">Povizio engine.</a></h2>
			<p>Just added interspersed setbacks. Can you spot it? Still need work to keep people from skipping ahead, require $ selections, etc.</p>
		<RaisedButton label="test left nav" onClick={this.toggle} />
		<LeftNav ref="leftNav" menuItems={menuItems} onNavOpen={this.showOverlay}/>
		{this.state.navOpen ? <div className="LeftNavOverlay" docked={false} onClick={this.closeNav}></div> : ""}
		</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
